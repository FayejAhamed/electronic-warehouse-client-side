import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUpdateProduct from '../../../hooks/useUpdateProduct';

const Update = () => {
    const {productId} = useParams();
   const[updateProduct] =useUpdateProduct(productId);
   

    return (
       
            <div className='products mb-3 bg-success pb-5 rounded-3 text-center text-white'>
            <img className='w-100' style={{width:'40px'}} src={updateProduct.picture} alt="" />
            <h4 className='mt-5'> {updateProduct.name}</h4>
            <p>Supplier: {updateProduct.supplierName}</p>
            <h5>price: ${updateProduct.price}</h5>
            <p>Quantity: {updateProduct.quantity}</p>
            <p className='px-3 py-2'>{updateProduct.description}</p>

        </div>
       
    );
};

export default Update;