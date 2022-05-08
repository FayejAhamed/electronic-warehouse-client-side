import  { useEffect, useState } from 'react';


const useUpdateProduct = productId => {
    const [updateProduct, setUpdateProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventoryitems`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateProduct(data))


    }, [productId])
    return [ updateProduct];
};

export default useUpdateProduct;