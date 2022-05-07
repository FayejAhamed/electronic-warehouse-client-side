import React from 'react';
import { Col, Row } from 'react-bootstrap';
import warehouse from '../../../images/bestDeals/warehouse.png'

const BestDeals = () => {
    return (
        <div className='container text-white mt-5 rounded-3'>
            <h1 className='text-center mt-5 text-black'>Get Our Best Deals</h1>
            <Row className=' '>
                <Col className=' bg-info mt-5 rounded-3'>
                    <div className='text-center'>
                        <h4 className='mt-5 pt-4'>ELECTRONIC WAREHOUSE</h4>
                        <h1 className=' mt-2 px-3' style={{ fontSize: '60px' }}>Everyone gets our best deals</h1>
                        <p className='mt-4' style={{ fontSize: '20px' }}>On every electronic products</p>
                        <p><small>Offers vary by device. Restrictions may apply.</small></p>
                    </div>
                </Col>
                <Col className='rounded-3 mt-5'>
                    <div>
                        <img className='img-fluid' src={warehouse} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default BestDeals;