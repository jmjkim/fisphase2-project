import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StockPreview from '../StockPreview';

const EditorForm = () => {
    const navigateTo = useNavigate();
    const [stock, setStock] = useState();
    const [formData, setFormData] = useState({});


    const handleIDChange = (e) => {
        fetch(`https://fisphase2-project-database.herokuapp.com/materials/${+e.target.value}`)
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
        
        fetch(`https://fisphase2-project-database.herokuapp.com/materials/${stock.id}`, {
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
        <form className='stock-manager-form' onSubmit={handleEditSubmit}>
            <h3>Edit Stock</h3>

            <StockPreview stock={stock} />

            <input type='text' name='id' onChange={handleIDChange} required={true} maxLength={4} placeholder='Stock#' />
            <input type='text' name='name' onChange={handleEditChange} placeholder='New name' />
            <input type='text' name='type' onChange={handleEditChange} placeholder='New stock type' />
            <input type='number' name='quantity' min={1} max={100} onChange={handleEditChange} placeholder='New quantity' />
            <input type='text' name='supplier' onChange={handleEditChange} placeholder='New supplier' />
            <input type='url' name='imgURL' onChange={handleEditChange} placeholder='New image URL' />
            <input type='text' name='note' onChange={handleEditChange} placeholder='New note' />
            
            <input type='submit' value='Update' />
            <input type='button' onClick={() => navigateTo('/')} value='Back to Dashboard'></input>
        </form>
        );
    }

export default EditorForm;