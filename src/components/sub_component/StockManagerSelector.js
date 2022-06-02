import { useNavigate } from 'react-router-dom';

const StockManagerSelector = () => {
    const navigateTo = useNavigate();
    
    const handleChange = (e) => {
        if (e.target.value === 'default') return null
        if (e.target.value === 'register') navigateTo('registernewstock');
        if (e.target.value === 'edit') navigateTo('editstock')
        if (e.target.value === 'delete') navigateTo('deletestock')
    }
    

    return (
        <div className='stock-manager-selector'>
            <label>I want to </label>

            <select onChange={(e) => {
                    handleChange(e);
                    return e.target.value = 'default'
                }}>

                <option value={'default'}>Please select</option>
                <option value={'register'}>Register new stock</option>
                <option value={'edit'}>Edit stock</option>
                <option value={'delete'}>Delete stock</option>
            </select>
        </div>
    );
}

export default StockManagerSelector;