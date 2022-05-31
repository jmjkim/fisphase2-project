import { Link } from 'react-router-dom';

export default function StockDisplayer ({ filteredStocks, setNewQuantity, handleQuantitySubmit }) {
    return (
        <div className='display-component'>
            <h3>List of Stocks</h3>
 
            <table>
                <thead className='table-header'>
                    <tr>
                        <td>ID</td>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Quantity</td>
                        <td>Supplier</td>
                        <td>In-stock</td>
                        <td>Note</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredStocks.map(stock => {
                        const {id, imgURL, name, type, quantity, supplier, note} = stock; 
                        
                        let stockQuantity = quantity <= 5 ? <b style={{color: 'rgb(250, 0, 0'}}>{quantity}</b> : <b>{quantity}</b>;
                        
                        return (
                            <tr key={id} className='stock-table'>
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
                                    <form onSubmit={(e) => handleQuantitySubmit(e, stock)}>
                                        <label>New Quantity: </label>
                                        <input type='number' name='quantity' min={0} max={100} onChange={(e) => setNewQuantity(+e.target.value)} />
                                        <input type='submit' value='Update' />
                                    </form>
                                </td>
                                <td>{supplier}</td>
                                <td>{stock.quantity > 0 ? 'Yes' : 'No'}</td>
                                <td style={{cursor: 'pointer'}} onClick={() => alert('edit note')}>{note}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}