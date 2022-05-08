import React from 'react';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Banner from '../Banner/Banner';
import BestDeals from '../BestDeals/BestDeals';
import ShopMore from '../ShopMore/ShopMore';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner> 
            <InventoryItems></InventoryItems>
            <ShopMore></ShopMore>  
            <BestDeals></BestDeals>        
        </div>
    );
};

export default Home;