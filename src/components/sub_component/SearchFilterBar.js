const SearchFilterBar = ({ settedTypes, settedSuppliers, setFilterByID, setFilterByType, setFilterBySupplier }) => {
    return (
        <div className='search-filter-bar'>
            <label>Search By: </label>
            <input placeholder='Stock# (4 digits)' maxLength={4} onChange={e => setFilterByID(+e.target.value)} />    

            <label> Filter By: </label>
            <select onChange={(e) => setFilterByType(e.target.value)}>
                <option value='all'>All</option>
                {settedTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </select>

            <select onChange={(e) => setFilterBySupplier(e.target.value)}>
                <option value='all'>All</option>
                {settedSuppliers.map((supplier, index) => <option key={index} value={supplier}>{supplier}</option>)}
            </select>
        </div>
    );
}

export default SearchFilterBar;