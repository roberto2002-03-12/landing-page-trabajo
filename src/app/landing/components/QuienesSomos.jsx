import { memo } from 'react'
import QuienesSomosImg from '../img/section-1.jpg';

export const QuienesSomos = memo(() => {
  return (
    <section className='landing-section-1' id='landing-section-1'>
        <div className="container">
            <h4>¿Quienes somos?</h4>
            <div className="row landing-section-1-contexto justify-content-center">
                <div className="section-1-texto col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
                    <div>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 
                            archivos de texto.
                        </p>
                    </div>

                </div>
                <div className="section-1-img col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
                    <img src={ QuienesSomosImg } alt="" />
                </div>
            </div>
        </div>
    </section>
  )
});
