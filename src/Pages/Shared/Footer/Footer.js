import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        
            <footer className=' container-fluid bg-dark text-white py-3 text-center'>
                <p>Contact In Our Live Website</p>
                <p><small>copyright @ {year}</small></p>
                
            </footer>
        
    );
};

export default Footer;