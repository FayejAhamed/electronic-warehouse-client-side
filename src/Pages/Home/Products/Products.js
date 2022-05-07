import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'

const Products = ({ product }) => {
    const {_id, name, picture, description, quantity, price, supplierName} = product;

    const navigate = useNavigate();
    const navigateToUpdateDetail = id =>{
        navigate(`/update/${id}`)
    }

    // console.log(product.picture);
    return (
        <div className='products mb-3 bg-success pb-5 rounded-3 text-center text-white'>
            <img className='w-100' style={{width:'40px'}} src={picture} alt="" />
            <h4 className='mt-5'> {name}</h4>
            <p>Supplier: {supplierName}</p>
            <h5>price: ${price}</h5>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>navigateToUpdateDetail(_id)}>Update Stock</button>
            <p className='px-3 py-2'>{description}</p>

        </div>
    );
};

export default Products;