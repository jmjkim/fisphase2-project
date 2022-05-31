import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditorForm = () => {
    const navigateTo = useNavigate();
    const [stock, setStock] = useState();
    const [formData, setFormData] = useState({});


    const handleIDChange = (e) => {
        fetch(`http://localhost:3000/materials/${+e.target.value}`)
        .then(r => r.json())
        .then(stock => {
            setStock(stock);
            setFormData(stock);
        })
        .catch(err => alert(err.message))

    }   
    

    const handleEditChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };


    const handleEditSubmit = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:3000/materials/${stock.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(r => r.json())
          .then(() => navigateTo('/'))
          .catch((err) => alert(err.message))
    };


    return (
        <div>
            

            <form className='stock-manager-form' onSubmit={handleEditSubmit}>
                <h3>Edit Stock</h3>

                {stock ? <div>
                            <img src={stock.imgURL} alt={stock.name} width={'50px'} />
                            <p>{stock.name}</p>
                            <p>{stock.type}</p>
                            <p>{stock.quantity}</p>
                            <p>{stock.supplier}</p>
                        </div> : null}

                <input type='text' name='id' onChange={handleIDChange} required={true} maxLength={4} placeholder='Stock#' />
                <input type='text' name='name' onChange={handleEditChange} placeholder='New name' />
                <input type='text' name='type' onChange={handleEditChange} placeholder='New stock type' />
                <input type='number' name='quantity' min={1} max={100} onChange={handleEditChange} placeholder='New quantity' />
                <input type='text' name='supplier' onChange={handleEditChange} placeholder='New supplier' />
                <input type='url' name='imgURL' onChange={handleEditChange} placeholder='New image URL' />
                <input type='text' name='note' onChange={handleEditChange} placeholder='New note' />
                <input type='submit' value='Update' />
            </form>
        </div>
        );
    }

export default EditorForm;