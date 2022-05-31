import { useNavigate } from 'react-router-dom';

const StockManagerSelector = () => {
    const navigateTo = useNavigate();

    const navigation = (e) => {
        if (e.target.value === 'default') return null;
        if (e.target.value === 'register') navigateTo('registernewstock');
        if (e.target.value === 'edit') navigateTo('editstock');
        if (e.target.value === 'delete') navigateTo('deletestock');
    }

    return (
        <div className='stock-manager-selector'>
            <label><b>Stock Management</b> </label>

            <select onChange={navigation}>
                <option value={'default'}>Please select</option>
                <option value={'register'}>Register new stock</option>
                <option value={'edit'}>Edit stock</option>
                <option value={'delete'}>Delete stock</option>
            </select>
        </div>
    );
}

export default StockManagerSelector;