import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MangeInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventoryitems')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);
    
    
    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/update/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }
    return (
        <div className='container'>
       
        <div className='manage-container'>
        {
            products.map(product =>
                <div key={product._id} className='products mb-3 pb-5 rounded-3 text-center shadow-sm'>
                <img className='img-fluid' style={{width:'200px'}} src={product.picture} alt="" />
                <h3>{product.name}</h3>
                <h5>{product.supplierName}</h5>
                <h5>Price: ${product.price}</h5>
                <p>{product.description}</p>
                <Button  variant="danger " onClick={() => handleUserDelete(product._id)} >Delete Item</Button>
                </div>
           )
        }
        </div>
        <Link to='/addnew'> <Button className="fixed-bottom mx-5 fs-5 w-25 d-block mx-auto" variant="success ">Add new item</Button></Link>

    </div>
    );
};

export default ManageInventory;