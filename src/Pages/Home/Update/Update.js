import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useUpdateProduct from '../../../hooks/useUpdateProduct';

const Update = () => {
    // const [quantity, setQauntity] = useState(true);
    const {productId} = useParams();
   const[updateProduct, setUpdateProduct] =useState([true]);
// console.log(updateProduct);


   useEffect(()=>{
    fetch(`http://localhost:5000/update/${productId}`)
    .then(res=>res.json())
    .then(data=>setUpdateProduct(data))
},[updateProduct])
  
   const handleDelivery = event =>{
       const quantity= updateProduct.quantity -  1;
       console.log(quantity);
       const sold = updateProduct.sold + 1;
       console.log(sold);
      const user = {quantity, sold};

      //send data in server for update qauntity
      fetch(`http://localhost:5000/quantity/${productId}`,{
          method: 'PUT',
          headers:{
              'content-type' : 'application/json',
          },
          body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(data =>{

      })
      .catch((error)=>{
          console.error('Error:', error)
      })
    

   }



  


    return (
        <Card className='text-center'>
           <div><img  style={{width:'200px'}} src={updateProduct?.picture} alt="" /></div>
            <h4 className='mt-5'> {updateProduct?.name}</h4>
            <p>Supplier: {updateProduct?.supplierName}</p>
            <h5>price: ${updateProduct?.price}</h5> <p className='px-3 py-2'>{updateProduct?.description}</p>
            <p>Quantity: {updateProduct?.quantity}</p>
            <p>sold: {updateProduct?.sold}</p>
            <button onClick={()=>handleDelivery()}>Delivery</button>
           
            
        </Card>
    );
};

export default Update;