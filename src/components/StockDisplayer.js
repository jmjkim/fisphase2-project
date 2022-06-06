const StockDisplayer = ({ filteredStocks }) => {
    return (
        <>
            <h3>List of Stocks</h3>
 
            <table>
                <thead className='table-header'>
                    <tr>
                        <td>ID</td>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Quantity (max 100)</td>
                        <td>Supplier</td>
                        <td>In-stock</td>
                        <td>Note</td>
                    </tr>
                </thead>

                <tbody>
                    {filteredStocks}
                </tbody>
                
            </table>
        </>
    );
}

export default StockDisplayer;