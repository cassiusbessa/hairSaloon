import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.scss';
import { Carousel } from 'react-responsive-carousel';
import cabelo1 from '../../images/cabelos/cabelo1.webp';
import cabelo2 from '../../images/cabelos/cabelo2.webp';
import cabelo3 from '../../images/cabelos/cabelo3.webp';
import cabelo4 from '../../images/cabelos/cabelo4.webp';

function Carroussel () {
    const [slicePercentage, setSlicePercentage] = useState(100);

    const handleInsertSlice = (_event) => {
        let newWidth = window.innerWidth;
        if (newWidth <= 960) setSlicePercentage(100);
        else if (newWidth > 960 && newWidth < 1500) setSlicePercentage(50);
        else setSlicePercentage(33.33);
    }

    window.addEventListener('resize', handleInsertSlice);

    useEffect(() => {
        handleInsertSlice();
    }, []);

    return (
        <div className='carousel'>
            <div className='name'>
                <h1>Conheça nossos trabalhos:</h1>
            </div>
            <div className="carousel-content">
                <Carousel
                    autoFocus
                    autoPlay
                    infiniteLoop
                    centerMode={ true }
                    emulateTouch
                    showThumbs={false}
                    renderIndicator={false}
                    centerSlidePercentage={ slicePercentage }
                >
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
            </div>
        </div>
    );
};
export default Carroussel;