import { memo } from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import { Splide, SplideSlide } from '@splidejs/react-splide';
//imagenes
import Chino1Img from '../img/slider2.png';
import Chino2Img from '../img/slider3.png';
import Chino3Img from '../img/slider4.png';
import Chino4Img from '../img/slider5.png';
import Chino5Img from '../img/slider6b.png';
import Chino6Img from '../img/slider7.png';
import Chino7Img from '../img/slider8b.png';
import Chino8Img from '../img/slider9b.png';
import Chino9Img from '../img/slider10.png';
import Chino10Img from '../img/slider11b.png';
import Chino11Img from '../img/slider13.png';
import Chino12Img from '../img/slider14.png';


const options = {
    perPage: 6,
    perMove: 6,
    gap: 4,
    height: '300px',
    width: '1100px',
    autoplay: true,
    type: 'loop',
    arrows: false,
    pagination: false,
    breakpoints: {
        1200: {
            perPage: 5,
            perMove: 5,
            width: '800px'
        },
        992: {
            perPage: 5,
            perMove: 5,
            width: '675px',
        },
        576: {
            perPage: 2,
            perMove: 2,
            width: '350px',
            height: '180px',
            gap: 1
        }
    },
};

export const NuestrosClientes = memo(() => {
    
    return (
        <section className="landing-section-4">
            {/*ToDo: adaptarlo a moviles*/}
            <h4 className='section-4-h4'>
                Nuestros clientes
            </h4>
            <div className="section-4-coursel">
                <Splide
                    options={options}
                >
                    <SplideSlide>
                        <img src={Chino1Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino2Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino3Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino4Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino5Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino6Img} alt="Ejemplo"/>
                    </SplideSlide>
                    {/*Seccion 2*/}
                    <SplideSlide>
                        <img src={Chino7Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino8Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino9Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino10Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino11Img} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Chino12Img} alt="Ejemplo"/>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    )
});
