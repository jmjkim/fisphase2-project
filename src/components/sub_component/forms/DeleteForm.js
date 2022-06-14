import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StockPreview from '../StockPreview';

const DeleteForm = () => {
    const navigateTo = useNavigate();
    const [stock, setStock] = useState(null);


    const handleIDChange = (e) => {
        if (+e.target.value.length === 4) {
            fetch(`https://fisphase2-project-database.herokuapp.com/materials/${+e.target.value}`)
            .then(r => r.json())
            .then(setStock)
            .catch(err => alert(err.message))
        }
    }   


    const handleDeleteSubmit = (e) => {
        e.preventDefault();

        fetch(`https://fisphase2-project-database.herokuapp.com/materials/${stock.id}`, {
            method: "DELETE"
        })
        .then(() => navigateTo('/'))
        .catch(err => alert(err.message))
    }  


    return (
        <form className='stock-manager-form' onSubmit={handleDeleteSubmit}>
            <h3>Delete Stock</h3>

            <StockPreview stock={stock} />

            <input type='text' name='id' onChange={handleIDChange} maxLength={4} placeholder='Stock#' autoComplete='off' />
            
            <input type='submit' value='Delete'></input>
            <input type='button' onClick={() => navigateTo('/')} value='Back to Dashboard'></input>
        </form>
    );
}

export default DeleteForm;