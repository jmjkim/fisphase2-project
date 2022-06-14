import { useState, useEffect } from 'react';


import SearchFilterBar from './sub_component/SearchFilterBar';
import StockDisplayer from './StockDisplayer';


const Dashboard = () => {
  document.title = 'Inventory Manager';


  const [stocks, setStocks] = useState([]);
  const [newQuantity, setNewQuantity] = useState(0);
  

  const [filterByID, setFilterByID] = useState(0);
  const [filterByType, setFilterByType] = useState('all');
  const [filterBySupplier, setFilterBySupplier] = useState('all');
  
  
  const settedTypes = [...new Set(stocks.map(stock => stock.type))];
  const settedSuppliers = [...new Set(stocks.map(stock => stock.supplier))];


  useEffect(() => {
    fetch("https://fisphase2-project-database.herokuapp.com/materials")
    .then(r => r.json())
    .then(setStocks)
    .catch(err => alert(err.message))
  }, [])


  const handleQuantitySubmit = (e, targetStock) => {
    e.preventDefault();


    const updatedStockQuantity = [...stocks].map(stock => stock.id === targetStock.id ? {...stock, quantity: newQuantity} : stock); 


    fetch(`https://fisphase2-project-database.herokuapp.com/materials/${targetStock.id}`, {
        method: "PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({quantity: newQuantity})
    })
    .then(r => r.json())
    .then(setStocks(updatedStockQuantity))
    .catch(err => alert(err.message))
  };


  const filteredStocks = [...stocks].filter(stock => (filterByID === stock.id || filterByID === 0) && true)
                                    .filter(stock => (filterByType === stock.type || filterByType === 'all') && true)
                                    .filter(stock => (filterBySupplier === stock.supplier || filterBySupplier === 'all') && true)


  return (
    <div>
        <SearchFilterBar settedTypes={settedTypes} 
                         settedSuppliers={settedSuppliers}
                         setFilterByID={setFilterByID}
                         setFilterByType={setFilterByType} 
                         setFilterBySupplier={setFilterBySupplier} />


        <StockDisplayer filteredStocks={filteredStocks} 
                        setNewQuantity={setNewQuantity} 
                        handleQuantitySubmit={handleQuantitySubmit} />
    </div>
  );
};


export default Dashboard;