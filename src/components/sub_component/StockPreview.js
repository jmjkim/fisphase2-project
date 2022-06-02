const StockPreview = ({ stock }) => {
    return (
        <div style={{ 'margin': '0 auto' }}>
            {stock ? <div>
                        <img src={stock.imgURL} alt={stock.name} width={'50px'} />
                        <p>{stock.name}</p>
                        <p>{stock.type}</p>
                        <p>{stock.quantity}</p>
                        <p>{stock.supplier}</p>
                        <p>{stock.note}</p>
                     </div> : null}
        </div>  
    );
}

export default StockPreview;
