const HandleQuantityForm = ({ stock, setNewQuantity, handleQuantitySubmit }) => {
    return (
        <form className='stock-row-quantity-form' onSubmit={e => handleQuantitySubmit(e, stock)}>
            <label>New Quantity: </label>

            <input type='number' name='quantity' min={0} max={100} onChange={e => setNewQuantity(+e.target.value)} />
            <input type='submit' value='Update' />
        </form>
    );
};

export default HandleQuantityForm;