import React from 'react';
import notfound from '../../../images/notfound/notfound.png'

const NotFound = () => {
    return (
       <div className='container'>
             <h2 className='text-danger text-center'>You are in the wrong the page</h2>
            <div className='d-flex justify-content-center'>
          
            <img src={notfound} alt="" />
        </div>
       </div>
    );
};

export default NotFound;