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
        axios.post('http://localhost:5000/inventoryitems', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }

    // const { register, handleSubmit } = useForm();
    // const [user] = useAuthState(auth)

    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `http://localhost:5000/inventoryitems`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res=> res.json())
    //     .then(result =>{
    //         console.log(result);
    //     } )
    // };
    return (
        <div className='container bg-dark py-5 w-50 mx-auto text-white my-5 rounded' style={{ height: '400px' }}>

            <form onSubmit={handlePlaceOrder} >
                {/* <input className='w-100 mb-2' type="text" name='name' value={user?.displayName} placeholder='name' required readOnly /> */}
                <br />
                <input className='w-100 mb-2' type="email" name='email' value={user?.email} placeholder='email' readOnly />
                <br />
                {/* <input className='w-100 mb-2' type="text" value={updateProduct?.name} name='service' placeholder='service'  /> */}
                <br />
                <br />
                <input className='w-100 mb-2' type="text" name='name' placeholder='Products Name' required />
                <input className='w-100 mb-2' type="number" name='price' placeholder='price' required />
                <input className='w-100 mb-2' type="text" name='supplierName' placeholder='Supplier Name' required />
                <input className='w-100 mb-2' type="number" name='quantity' placeholder='Quantity' required />
                <input className='w-100 mb-2' type="text" name='description' placeholder='Product Description' required />
                <br />
                <input className='w-100 mb-2' type="text" name='picture' placeholder='image URL' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>

            {/* <h2 className='text-center'>Add Your Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4 mx-5' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 mx-5' placeholder='Description' {...register("description")} />
                <input className='mb-3 mx-5' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 mx-5' placeholder='Photo URL' type="text" {...register("picture")} />
                <input className='mt-3 mx-5' type="submit" value="Add Service" />
            </form> */}
        </div>
    );
};

export default AddNewItem;