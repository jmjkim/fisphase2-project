import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StockPreview from '../StockPreview';

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

                <StockPreview stock={stock} />
                <input type='text' name='id' onChange={handleIDChange} maxLength={4} placeholder='Stock#'></input>
                <input type='submit' value='Delete'></input>
            </form>
        </div>
    );
}

export default DeleteForm;