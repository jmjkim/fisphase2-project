import React from 'react';
import { Link } from 'react-router-dom';


const StockDisplayer = ({ filteredStocks, setNewQuantity, handleQuantitySubmit }) => {
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
                    {filteredStocks.map((stock, key) => {
                        const {id, imgURL, name, type, quantity, supplier, note} = stock        
                        
                        return (
                            <React.Fragment key={key}>
                               <tr className='stock-table'>
                                    <td>{id}</td>
                                    <td>
                                        <Link to={`viewstockdetail/${id}`}>
                                            <img title='Click to view detail' src={imgURL} alt={name} width={'50px'} style={{cursor: 'pointer'}} />
                                        </Link>
                                    </td>
                                    <td>{name}</td>
                                    <td>{type}</td>
                                    <td>
                                        Current: {quantity <= 5 ? <b style={{color : 'rgb(250, 0, 0)'}}>{quantity}</b> : <b>{quantity}</b>}

                                        <form className='stock-row-quantity-form' onSubmit={e => handleQuantitySubmit(e, stock)}>
                                            <label>New Quantity: </label>
                                            
                                            <input type='number' name='quantity' min={0} max={100} onChange={e => setNewQuantity(+e.target.value)} />
                                            <input type='submit' value='Update' />
                                        </form>
                                    </td>
                                    <td>{supplier}</td>
                                    <td>{quantity > 0 ? <b>Yes</b> : <b style={{color : 'rgb(250, 0, 0)'}}>No</b>}</td>
                                    <td>{note}</td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
               </tbody>


            </table>
        </>
    );
}

export default StockDisplayer;