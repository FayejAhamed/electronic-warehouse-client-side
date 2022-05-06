import React from 'react';
import Banner from '../Banner/Banner';
import BestDeals from '../BestDeals/BestDeals';
import ShopMore from '../ShopMore/ShopMore';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <ShopMore></ShopMore>  
            <BestDeals></BestDeals>        
        </div>
    );
};

export default Home;