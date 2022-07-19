import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.scss';
import { Carousel } from 'react-responsive-carousel';
import cabelo1 from '../../images/cabelos/cabelo1.webp';
import cabelo2 from '../../images/cabelos/cabelo2.webp';
import cabelo3 from '../../images/cabelos/cabelo3.webp';
import cabelo4 from '../../images/cabelos/cabelo4.webp';


class Carroussel extends Component {
    render() {
        return (
            <>
                <div className='name'>
                    <h1>Conheça nossos trabalhos:</h1>
                </div>
                <Carousel autoFocus autoPlay  infiniteLoop 	emulateTouch 
                showThumbs={false} renderIndicator={false}	>
                    <div className='carousel-img'>
                        <img src={cabelo1} />
                    </div>
                    <div className='carousel-img'>
                        <img src={cabelo2} />
                    </div>
                    <div className='carousel-img'>
                        <img src={cabelo3} />
                    </div>
                    <div className='carousel-img'>
                        <img src={cabelo4} />
                    </div>
                </Carousel>
            </>
        );
    }
};
export default Carroussel;