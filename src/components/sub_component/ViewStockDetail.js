import useFetch from './useFetch';
import { useNavigate, useParams } from 'react-router-dom';

const ViewStockDetail = () => {
    document.title = 'Stock Detail';


    const [stock] = useFetch(`https://fisphase2-project-database.herokuapp.com/materials/${stockID}`);
    

    const navigateTo = useNavigate();
    const {stockID} = useParams();

    
    return (
        <>
            <div className='stock-detail'>
                <h3>Stock Detail</h3>

                <p>Stock# {stock.id} {stock.name} ({stock.type})</p>
                <img src={stock.imgURL} alt={stock.name} width={'100px'}/>
                <p>Supplier: {stock.supplier}</p>
                <p>{stock.note}</p>
                
                <input type='button' onClick={() => navigateTo('/')} value='Back to Dashboard' />
            </div>
        </>
    );
}

export default ViewStockDetail;