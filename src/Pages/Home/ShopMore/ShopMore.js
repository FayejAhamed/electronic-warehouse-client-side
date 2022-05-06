import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import {MdOutlineLocalShipping } from 'react-icons/md';
import {BsBag } from 'react-icons/bs';
import {AiOutlineMessage } from 'react-icons/ai';



const ShopMore = () => {
    return (
        <div className='container mt-5 shadow-sm p-4 rounded-2'>
            <h2 className='my-5 text-center'>Storege Your Product You Want</h2>
            <hr />
            <CardGroup>
                <Card className='border-0'>
                  <p className='text-center'><MdOutlineLocalShipping size={70}/></p>
                    <Card.Body className='text-center'>
                        <Card.Title>Free shipping and returns</Card.Title>
                        <Card.Text>
                        Shop online with free shipping and returns.
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card className='border-0'>
                    <p className='text-center'><BsBag size={70}/></p>
                    <Card.Body className='text-center'>
                        <Card.Title>Same-day pickup</Card.Title>
                        <Card.Text>
                        Order online and pick up in-store or curbside today. Subject to availability..{' '}
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card className='border-0'>
                   <p className='text-center'><AiOutlineMessage size={70}/></p>
                    <Card.Body className='text-center'>
                        <Card.Title>Live customer service assistance</Card.Title>
                        <Card.Text>
                        Get help picking out the perfect device and plan with a live virtual expert.
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
            </CardGroup>
        </div>
    );
};

export default ShopMore;