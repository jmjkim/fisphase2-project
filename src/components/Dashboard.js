import { useState, useEffect } from 'react';

import SearchFilterBar from './sub_component/SearchFilterBar';
import StockDisplayer from './StockDisplayer';

export default function Dashboard() {
  document.title = 'Dashboard';

  const [stocks, setStocks] = useState([]);
  const [newQuantity, setNewQuantity] = useState(0);
  const [filterByID, setFilterByID] = useState(0);
  const [filterByType, setFilterByType] = useState('all');
  const [filterBySupplier, setFilterBySupplier] = useState('all');

  const types = [...stocks].map(stock => stock.type);
  const suppliers = [...stocks].map(stock => stock.supplier);


  useEffect(() => {
    fetch('http://localhost:3000/materials')
    .then(r => r.json())
    .then(setStocks)
    .catch(err => alert(err.message))
  }, []);


  const handleQuantitySubmit = (e, targetStock) => {
    e.preventDefault();

    const newStocks = [...stocks].map(stock => stock.id === targetStock.id ? {...stock, quantity: newQuantity} : stock); 

    fetch(`http://localhost:3000/materials/${targetStock.id}`, {
        method: "PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({quantity: newQuantity})
    })
    .then(r => r.json())
    .then(setStocks(newStocks))
    .catch(err => alert(err.message))
  };


  const filteredStocks = [...stocks].filter(stock => {if (filterByID === stock.id || filterByID === 0) return true})
                                    .filter(stock => {if (filterByType === stock.type || filterByType === 'all') return true})
                                    .filter(stock => {if (filterBySupplier === stock.supplier || filterBySupplier === 'all') return true})


    return (
      <div>
        <SearchFilterBar types={types} suppliers={suppliers} setFilterByID={setFilterByID} setFilterByType={setFilterByType} setFilterBySupplier={setFilterBySupplier} />
        <StockDisplayer filteredStocks={filteredStocks} setNewQuantity={setNewQuantity} handleQuantitySubmit={handleQuantitySubmit} />
      </div>
    )
};