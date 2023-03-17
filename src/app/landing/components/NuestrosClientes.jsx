import { memo } from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageExample from '../img/150x150.png';
//import { Carousel } from 'react-responsive-carousel';
import { Splide, SplideSlide } from '@splidejs/react-splide';
//imagenes
import AmazonExample from '../img/amazon.jpg';
import FacebookExample from '../img/facebook-logo.png';
import CloudinaryExample from '../img/Cloudinary-Logo.png';
import AppleExample from '../img/apple.jpg';
import SpotifyExample from '../img/spotify.png';
import PlatziExample from '../img/platzi.png';
import AmazonPrimerExample from '../img/amazonprime.jpg';
import DigitalOceanExample from '../img/digitalocean.png';
import HostingerExample from '../img/hostinger.jpg';
import UdemyExample from '../img/udemy-logo-letra-150x150.jpg';
import LyricalLemonadeExample from '../img/lyrical_lemonade.png';
import TeslaExample from '../img/tesla.png';

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
                        <img src={AmazonExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={FacebookExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={CloudinaryExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={AppleExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={SpotifyExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={PlatziExample} alt="Ejemplo"/>
                    </SplideSlide>
                    {/*Seccion 2*/}
                    <SplideSlide>
                        <img src={AmazonPrimerExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={DigitalOceanExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={HostingerExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={UdemyExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={LyricalLemonadeExample} alt="Ejemplo"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={TeslaExample} alt="Ejemplo"/>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    )
});
