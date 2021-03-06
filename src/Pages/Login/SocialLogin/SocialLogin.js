import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/social/google.png';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user)
   

    let from = location.state?.from?.pathname || "/";

    let socialError;
    if (loading) {
        return <Loading></Loading>;
      }
      if(token){
        navigate(from, { replace: true });
    }
      if (error) {
        return (
          socialError =
            <div className='text-danger mt-2 text-center'>
                <p>Error: {error.message}</p>
            </div>
        );
      }
    
    return (
        <div>
               <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
            </div>
           <div>
           <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className='px-2 text-white'> Google sign In</span>
                </button>
           </div>
        </div>
    );
};

export default SocialLogin;