import { memo, useEffect } from 'react';
import AdobeImg from '../img/adobe.svg';
import ComprasImg from '../img/compras.svg';
import CPEImg from '../img/cpe.svg';
import FacturaImg from '../img/factura.svg';
import SmileImg from '../img/smile.svg';
import WhatsappImg from '../img/whatsapp.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Beneficios = memo(() => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='landing-section-7'>
      <div 
        className="row"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <h4>Beneficios</h4>
        <div className="landing-beneficios-1 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="landing-box-beneficio">
            <img src={SmileImg} alt="" />
            <div className="landing-box-beneficio-text">
                <h5>Validación de CPE code QR</h5>
                <p>
                Ahora puedes scanear cualquier código QR de un comprobante electrónico y veriifcar en tiempo real su validez con la SUNAT.
                </p>
            </div>
          </div>
          <div className="landing-box-beneficio">
            <img src={WhatsappImg} alt="" />
            <div className="landing-box-beneficio-text">
                <h5>Reportes</h5>
                <p>Breve resumen estadístico de ventas y compras del mes.</p>
            </div>
          </div>
          <div className="landing-box-beneficio">
            <img src={CPEImg} alt="" />
            <div className="landing-box-beneficio-text">
                <h5>Envio de CPE por whatsapp</h5>
                <p>Ya no es necesario que imprimas tus comprobantes, Envíalos al whatsapp o al correo, ovidate del papel.</p>
            </div>
          </div>
        </div>
        <div className="landing-beneficios-2 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="landing-box-beneficio">
            <img src={AdobeImg} alt="" />
            <div className="landing-box-beneficio-text">
                <h5>Notas de Venta y pedidos</h5>
                <p>Vende y atiende pedidos sin restricciones.</p>
            </div>
          </div>
          <div className="landing-box-beneficio">
            <img src={ComprasImg} alt="" />
            <div className="landing-box-beneficio-text">
              <h5>Compras</h5>
              <p>Registra tus compras para llevar un mejor del negocio.</p>
            </div>
          </div>
          <div className="landing-box-beneficio">
            <img src={FacturaImg} alt="" />
            <div className="landing-box-beneficio-text">
                <h5>Facturas y Boletas electrónicas</h5>
                <p>Genera los documentos tributarios mas impotantes desde tu celular.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});
