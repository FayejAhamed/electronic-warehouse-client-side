import React from 'react';
import { Carousel } from 'react-bootstrap';
import laptop from '../../../images/Banner/laptop.webp'
import hpDekstop from '../../../images/Banner/hpDekstop.jpg'
import mac from '../../../images/Banner/Background.png'

const Banner = () => {
    return (
        <div className='container'>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid " 
                        src={laptop}
                        
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>WE are the best in the world</h3>
                        <p>If are lokking for a warehouse we are the best </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid" 
                        src={hpDekstop}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We have best service</h3>
                        <p>We will support our customer alwase if don not need to be woory</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={mac}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We are alwase here</h3>
                        <p>You can Store any kind of electonics producs here</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;