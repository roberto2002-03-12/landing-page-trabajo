import { memo, useEffect, useState } from 'react';
import PuntoExample from '../img/punto.svg';
import ArquitecturaImg from '../img/arquitectura.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Arquitectura = memo(() => {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        AOS.init();
        const mediaQuery = window.matchMedia("(min-width: 991px)");
        setIsWideScreen(mediaQuery.matches);
    }, []);

  return (
    <section className="landing-section-6">
        <div className="row">
            <div 
                className="landing-arquitectura-info col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                data-aos={isWideScreen ? 'zoom-in-down' : '' }
                data-aos-duration="1000"
            >
                <div className="arq-info">
                    <h4>Arquitectura Tecnológica</h4>
                    <p>
                    Frabricamos software basado en tecnología open source, usamos los frameworks de 
                    desarrollo mas modernos y ágiles, los cuales nos dan mucha flexibilidad y control 
                    total sobre la lógica de negocios y el diseño de interfaces. 
                    </p>
                    <br />
                    <p>
                    Como sowftare factory nos apoyamos en metodologías, marcos de trabajo y modelos de 
                    madurez de software.
                    </p>
                </div>

                <div className="arq-info-puntos">
                    <div className="arq-punto">
                        <img src={PuntoExample} alt="" />
                        <div className="arq-text">
                            <h5>Scrum</h5>
                            <p>
                                Proceso y estrategia para desarrollo incremental de software.
                            </p>
                        </div>
                    </div>

                    <div className="arq-punto">
                        <img src={PuntoExample} alt="" />
                        <div className="arq-text">
                            <h5>CMMI</h5>
                            <p>
                                Modelo de madurez para los procesos de desarrollo de una software factory.
                            </p>
                        </div>
                    </div>

                    <div className="arq-punto">
                        <img src={PuntoExample} alt="" />
                        <div className="arq-text">
                            <h5>Lean Startup</h5>
                            <p>
                                Metodología para desarrollo de negocios y productos en corto tiempo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className="landing-arquitectura-img col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                data-aos={isWideScreen ? 'zoom-in-up' : '' }
                data-aos-duration="1000"
            >
                <img src={ArquitecturaImg} alt="" />
            </div>
        </div>
    </section>
  )
});
