import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewStockDetail() {
    document.title = 'Stock Detail'

    const navigateTo = useNavigate();
    const {stockID} = useParams();
    const [stock, setStock] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/materials/${stockID}`)
        .then(r => r.json())
        .then(setStock)
        .catch(err => alert(err.message))
    }, [])

    return (
        <div className='display-component'>
            <input type='button' onClick={() => navigateTo('/')} value='Back to Dashboard' />

            <div className='stock-detail'>
                <p>{stock.atname} ({stock.type})</p>
                <img src={stock.imgURL} alt={stock.name} width={'200px'}/>
                <p>Stock# {stock.id}</p>
                <p>Supplier: {stock.supplier}</p>
                <p>{stock.note}</p>
            </div>
        </div>
    );
}