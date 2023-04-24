import React, {memo} from 'react';
import BancosImg from '../img/bancos.svg';

export const MetodosPagos = memo(() => {
    return (
        <section className="landing-section-9">
            <div className="row">
                <div className="metodos-pagos-1 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className='metodo-pagos-content'>
                        <h5>Métodos de pagos aceptados</h5>
                    </div>
                </div>
                <div className="metodos-pagos-2 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={BancosImg} alt=""/>
                </div>
            </div>
        </section>
    )
});
