import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Home/Products/Products';
import './InventoryItems.css'

const InventoryItems = () => {
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
            <div className='products-container'>
            {
                products.slice(0, 6).map(product =><Products key={product._id} product={product}></Products>)
            }
            </div>
          <Link to='/manage'> <button> Manage Inventories</button></Link>
        </div>
    );
};

export default InventoryItems;