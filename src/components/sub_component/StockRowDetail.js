import { Link } from 'react-router-dom';

const StockRowDetail = ({ stock, setNewQuantity, handleQuantitySubmit }) => {
    const {id, imgURL, name, type, quantity, supplier, note} = stock;
    let stockQuantity = quantity <= 5 ? <b style={{color : 'rgb(250, 0, 0)'}}>{quantity}</b> : <b>{quantity}</b>;

    return (
        <tr className='stock-table'>
            <td>{id}</td>
            <td>
                <Link to={`viewstockdetail/${stock.id}`}>
                    <img src={imgURL} alt={name} width={'50px'} style={{cursor: 'pointer'}} />
                </Link>
            </td>
            <td>{name}</td>
            <td>{type}</td>
            <td>
                Current: <b>{stockQuantity}</b>

                <form className='stock-row-quantity-form' onSubmit={(e) => handleQuantitySubmit(e, stock)}>
                    <label>New Quantity: </label>
                    <input type='number' name='quantity' min={0} max={100} onChange={(e) => setNewQuantity(+e.target.value)} />
                    <input type='submit' value='Update' />
                </form>
            </td>
            <td>{supplier}</td>
            <td>{stock.quantity > 0 ? <b>Yes</b> : <b style={{color : 'rgb(250, 0, 0)'}}>No</b>}</td>
            <td>{note}</td>
        </tr>
    );
}

export default StockRowDetail;