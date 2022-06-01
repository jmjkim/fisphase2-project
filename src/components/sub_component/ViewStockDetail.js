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
            <h3>Stock Detail</h3>

            <div className='stock-detail'>
                <p>{stock.name} ({stock.type})</p>
                <img src={stock.imgURL} alt={stock.name} width={'100px'}/>
                <p>Stock# {stock.id}</p>
                <p>Supplier: {stock.supplier}</p>
                <p>{stock.note}</p>
                <input type='button' onClick={() => navigateTo('/')} value='Back to Dashboard' />
            </div>
        </div>
    );
}