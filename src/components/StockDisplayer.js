import StockRowDetail from './sub_component/StockRowDetail';

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
                    {filteredStocks.map((stock, key) => <StockRowDetail key={key}
                                                                        stock={stock} 
                                                                        setNewQuantity={setNewQuantity} 
                                                                        handleQuantitySubmit={handleQuantitySubmit} />)}
                </tbody>
            </table>
        </div>
    );
}