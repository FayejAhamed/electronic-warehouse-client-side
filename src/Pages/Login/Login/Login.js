import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log(user);

    }
    return (
        <div className=' bg-dark py-5 w-50 mx-auto text-white my-5 rounded' style={{ height: '500px' }}>
            <h2 className='mx-auto text-center text-bold mt-2 mb-5'>Sign Into Your Account</h2>
            <Form onSubmit={handleSubmit} className='pb-5'>
                <Form.Group className="mb-3 w-50 mx-auto " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4 pb-2 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button variant="info w-50 mx-auto d-block" className='' type="submit">
                    <small className='fs-5 text-bold p-2'> Login</small>
                </Button>
                <p className='text-center mt-3'>Don't have an account? <Link className='text-info' to='/register'> Register here</Link></p>

            </Form>
        </div>
    );
};

export default Login;