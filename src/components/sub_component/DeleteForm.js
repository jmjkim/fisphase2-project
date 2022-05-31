import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteForm = () => {
    const navigateTo = useNavigate();
    const [stock, setStock] = useState(null);

    const handleIDChange = (e) => {
        fetch(`http://localhost:3000/materials/${+e.target.value}`)
        .then(r => r.json())
        .then(setStock)
        .catch(err => alert(err.message))
    }   


    const handleDeleteSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/materials/${stock.id}`, {
            method: "DELETE"
        })
        .then(() => navigateTo('/'))
        .catch(err => alert(err.message))
    }  


    return (
        <div>

            <form className='stock-manager-form' onSubmit={handleDeleteSubmit}>
                <h3>Delete Stock</h3>

                {stock ? <div>
                            <img src={stock.imgURL} alt={stock.name} width={'50px'} />
                            <p>{stock.name}</p>
                            <p>{stock.type}</p>
                            <p>{stock.quantity}</p>
                            <p>{stock.supplier}</p>
                        </div> : null}

                <input type='text' name='id' onChange={handleIDChange} maxLength={4} placeholder='Stock#'></input>
                <input type='submit' value='Delete'></input>
            </form>
        </div>
    );
}

export default DeleteForm;