import { Link } from 'react-router-dom';

import HandleQuantityForm from './forms/HandleQuantityForm';


const StockRowDetail = ({ stock, setNewQuantity, handleQuantitySubmit }) => {
    const {id, imgURL, name, type, quantity, supplier, note} = stock;

    return (
        <tr className='stock-table'>
            <td>{id}</td>
            <td>
                <Link to={`viewstockdetail/${id}`}>
                    <img title='Click to view detail' src={imgURL} alt={name} width={'50px'} style={{cursor: 'pointer'}} />
                </Link>
            </td>
            <td>{name}</td>
            <td>{type}</td>
            <td>
                Current: {quantity <= 5 ? <b style={{color : 'rgb(250, 0, 0)'}}>{quantity}</b> : <b>{quantity}</b>}

                <HandleQuantityForm stock={stock} setNewQuantity={setNewQuantity} handleQuantitySubmit={handleQuantitySubmit} />
            </td>
            <td>{supplier}</td>
            <td>{quantity > 0 ? <b>Yes</b> : <b style={{color : 'rgb(250, 0, 0)'}}>No</b>}</td>
            <td>{note}</td>
        </tr>
    );
}

export default StockRowDetail;