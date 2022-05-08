import React from 'react';
import warehouse from '../../../images/bestDeals/warehouse.png'

const BestDeals = () => {
    return (
        <div className='container py-5 rounded-3'>
            <h1 className='text-center my-5 text-black'>Get Our Best Deals</h1>
            <div className='row'>
                <div className="col-lg-6 col-md-6 text-center shadow-sm bg-info text-white">
                   
                        <h4 className='mt-5 pt-4'>ELECTRONIC WAREHOUSE</h4>
                        <h1 className=' mt-2 px-3' style={{ fontSize: '60px' }}>Everyone gets our best deals</h1>
                        <p className='mt-4' style={{ fontSize: '20px' }}>On every electronic products</p>
                        <p><small>Offers vary by device. Restrictions may apply.</small></p>
                   


                </div>
                <div className="col-lg-6 col-md-6">
                    
                        <img className='img-fluid' src={warehouse} alt="" />
                    
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDeals;