import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import useUpdateProduct from '../../../hooks/useUpdateProduct';


const AddNewItem = () => {

    const { productId } = useParams();
    // const [updateProduct] = useUpdateProduct(productId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user?.email,
            // name:user?.displayName,
            productId: productId,
            picture: event.target.picture.value,
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplierName: event.target.supplierName.value,
            description: event.target.description.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }

   
    return (
        <div className='container bg-dark py-5 w-50 mx-auto text-white my-5 rounded'>

            <form onSubmit={handlePlaceOrder} >
               
                <br />
                <br />
                <input className='w-50 mb-2 px-5 mx-auto d-block' type="text" name='name' placeholder='Products Name' required />
                <br />
                <input className='w-50 mb-2 px-5 mx-auto d-block' type="number" name='price' placeholder='price' required />
                <br />
                <input className='w-50 mb-2 px-5 mx-auto d-block' type="text" name='supplierName' placeholder='Supplier Name' required />
                <br />
                <input className='w-50 mb-2 px-5 mx-auto d-block' type="text" name='quantity' placeholder='Quantity' required />
                <br />
                <input className='w-50 mb-2 px-5 mx-auto d-block'  type="text" name='description' placeholder='Product Description' required />
                <br />
                <input className='w-50 mb-2 px-5 mx-auto d-block' type="text" name='picture' placeholder='image URL' required />
                <br />
                <input className='btn btn-primary d-block mx-auto w-25' type="submit" value="Add Your Product" />
                <br /><br />
            </form>

            
        </div>
    );
};

export default AddNewItem;