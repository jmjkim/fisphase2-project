import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [stocks, setStocks] = useState([]);


    useEffect(() => {
        fetch(url)
        .then(r => r.json())
        .then(setStocks)
        .catch(err => alert(err.message))
    }, [url])

    
    return [stocks];
}


export default useFetch;