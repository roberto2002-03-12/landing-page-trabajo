import { memo } from 'react'
import QuienesSomosImg from '../img/nosotros_img.svg';

export const QuienesSomos = memo(() => {
  return (
    <section className='landing-section-1' id='landing-section-1'>
        <div className="container">
            <h4>¿Quienes somos?</h4>
            <div className="row landing-section-1-contexto justify-content-center">
                <div className="section-1-texto col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
                    <div>
                        <p>
                            Invoice Fácil es una compañía parte de DYF Contadores y Abogados, enfocados en el lado de sistema, nuestro propósito viene en la atención, soporte y guía del usuario acerca de nuestro sistema de contabilidad y gestión de tienda.
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
