import { Grid, Card } from '@mui/material';
import StarImg from '../img/star.png';
import { memo } from 'react';

const style = {
    width: '180px',
    height: '362px',
    backgroundColor: '#554DDE',
    boxShadow: '3px 5px #BABABA'
}

export const NuestrosServicios = memo(() => {
  return (
    <section className='landing-section-3' id='landing-section-3'>
        <div className="container">
            <h4 className='section-3-title'>
                Nuestros servicios
            </h4>
            <div className='row'>
                <div className="section-3-container-card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <Card
                        className='section-3-card'
                        sx={style}
                    >
                        <div className="section-3-card-img">
                            <img src={ StarImg } alt="" />
                        </div>
                        <div className="section-3-card-text">
                            <h4>
                                Ideas disruptivas
                            </h4>
                            <p>
                            Analizar los productos del mercado actual 
                            que resuelven cierto problema, 
                            y proponer nuevos modelos de mejora.
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="section-3-container-card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <Card
                        className='section-3-card'
                        sx={style}
                    >
                        <div className="section-3-card-img">
                            <img src={ StarImg } alt="" />
                        </div>
                        <div className="section-3-card-text">
                            <h4>
                                Modelo de negocio
                            </h4>
                            <p>
                                Plantear la forma de monetización para que se convierta en una propuesta viable en el tiempo. 
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="section-3-container-card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <Card
                        className='section-3-card'
                        sx={style}
                    >
                        <div className="section-3-card-img">
                            <img src={ StarImg } alt="" />
                        </div>
                        <div className="section-3-card-text">
                            <h4>
                                MPV
                            </h4>
                            <p>
                                Desarrollar un producto mínimo viable que será testeado por el mercado, recogiendo todo el feedback posible.
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="section-3-container-card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <Card
                        className='section-3-card'
                        sx={style}
                    >
                        <div className="section-3-card-img">
                            <img src={ StarImg } alt="" />
                        </div>
                        <div className="section-3-card-text">
                            <h4>
                                Medición, mejora y evolución
                            </h4>
                            <p>
                                A través del constantes iteraciones se mejora el producto final.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
});
