import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user ]= useAuthState(auth);
    return (
        <div>
            <h2>My item page</h2>
        </div>
    );
};

export default MyItem;