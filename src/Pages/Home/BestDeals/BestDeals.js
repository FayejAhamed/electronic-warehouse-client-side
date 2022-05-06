import React from 'react';
import { Col, Row } from 'react-bootstrap';
import warehouse from '../../../images/bestDeals/warehouse.png'

const BestDeals = () => {
    return (
        <div className='container text-white mt-4 rounded-3'>
            <Row>
                <Col className=' bg-info rounded-3'>
                    <div className='p-5 my-5'>
                        <h4 className=''>ELECTRONIC WAREHOUSE</h4>
                        <h1 style={{ fontSize: '60px' }}>Everyone gets our best deals</h1>
                        <p style={{ fontSize: '20px' }}>On every electronic products</p>
                        <p><small>Offers vary by device. Restrictions may apply.</small></p>
                    </div>
                </Col>
                <Col className='rounded-3'>
                    <div>
                        <img src={warehouse} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default BestDeals;