import React from 'react';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Banner from '../Banner/Banner';
import BestDeals from '../BestDeals/BestDeals';
import ShopMore from '../ShopMore/ShopMore';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <InventoryItems></InventoryItems>
            <ShopMore></ShopMore>  
            <BestDeals></BestDeals>        
        </div>
    );
};

export default Home;