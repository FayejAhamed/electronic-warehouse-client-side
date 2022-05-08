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
        <div className='container shadow-sm p-3 my-5'>
            <div className='products-container'>
            {
                products.slice(0, 6).map(product =><Products key={product._id} product={product}></Products>)
            }
            </div>
          <Link className='text-decoration-none' to='/manage'> <button  className='btn btn-info fs-3 d-block mx-auto text-white '> Manage Inventories</button></Link>
        </div>
    );
};

export default InventoryItems;