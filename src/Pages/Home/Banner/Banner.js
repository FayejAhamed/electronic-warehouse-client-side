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
                        className="d-block w-100" height={"800px"}
                        src={laptop}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={"800px"}
                        src={hpDekstop}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={"800px"}
                        src={mac}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;