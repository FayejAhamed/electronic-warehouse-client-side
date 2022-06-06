// import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyItem = () => {
    const [users, setUsers] = useState();
   
    // const [Refresh, setRefresh] =React.useState(false)
    const [user ,loading ]= useAuthState(auth)
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
if(loading){
     <Loading></Loading>
}
   
    useEffect( () =>{
        fetch('https://pacific-taiga-87082.herokuapp.com/myorder')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [users]);

    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `https://pacific-taiga-87082.herokuapp.com/myorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }


    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email
            const url = `https://pacific-taiga-87082.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setProducts(data)
            }
            catch (error) {
                console.log(error.message);
                if(error.response.status === 401 ||error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }

        }
        getOrders()

    }, [user])
    // useEffect(() => {
    //     fetch('https://pacific-taiga-87082.herokuapp.com/inventoryitems')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //         })
    // }, []);
   
    return (
        <div className='manage-container' >
            {
            products.map(product =>
                <div key={product._id} className='products mb-3 pb-5 rounded-3 text-center shadow-sm'>
                <img className='img-fluid' style={{width:'200px'}} src={product.picture} alt="" />
                <h3>{product.name}</h3>
                <h5>{product.supplierName}</h5>
                <h5>Price: ${product.price}</h5>
                <p>{product.description}</p>
                <button className='btn btn-danger px-4'  onClick={()=>handleUserDelete(product._id , window.location.reload(false))}>Delete Item</button>
                {/* <Button  variant="danger " onClick={() => handleUserDelete(product._id)} >Delete Item</Button> */}
                </div>
           )
        }
        </div>
    );
};

export default MyItem;