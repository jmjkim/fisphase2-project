const StockPreview = ({ stock }) => {
    return (
        <div>
            {stock ? <div>
                        <img src={stock.imgURL} alt={stock.name} width={'50px'} />
                        <p>{stock.name}</p>
                        <p>{stock.type}</p>
                        <p>{stock.quantity}</p>
                        <p>{stock.supplier}</p>
                     </div> : null}
        </div>
    );
}

export default StockPreview;
