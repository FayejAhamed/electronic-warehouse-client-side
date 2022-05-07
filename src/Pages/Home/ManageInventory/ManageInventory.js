import React, { useEffect, useState } from 'react';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventoryitems')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
        <h2>items: {products.length}</h2>
        <div>
        {
            products.map(product =><div key={product._id}>
                <img style={{width:'200px'}} src={product.picture} alt="" />
                <h3>{product.name}</h3>
                <h5>{product.supplierName}</h5>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button >Delete</button>
            </div>)
        }
        </div>
    </div>
    );
};

export default ManageInventory;