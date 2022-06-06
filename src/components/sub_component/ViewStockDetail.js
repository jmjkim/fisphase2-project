import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewStockDetail = () => {
    document.title = 'Stock Detail'

    const [stock, setStock] = useState([]);
    
    const navigateTo = useNavigate();
    const {stockID} = useParams();
    

    useEffect(() => {
        fetch(`https://fisphase2-project-database.herokuapp.com/materials/${stockID}`)
        .then(r => r.json())
        .then(setStock)
        .catch(err => alert(err.message))
    }, [])

    
    return (
        <>
            <div className='stock-detail'>
                <h3>Stock Detail</h3>

                <p>Stock# {stock.id} {stock.name} ({stock.type})</p>
                <img src={stock.imgURL} alt={stock.name} width={'100px'}/>
                <p>Supplier: {stock.supplier}</p>
                <p>{stock.note}</p>
                
                <input type='button' onClick={() => navigateTo('/')} value='Back to Dashboard' />
            </div>
        </>
    );
}

export default ViewStockDetail;