import { useState, useEffect } from 'react';
import './styles/LandingStyle.css';
import { NavBar, QuienesSomos, NuestraExperiencia, NuestrosServicios, 
         NuestrosClientes, NuestrosPlanes, Arquitectura,
         Beneficios, AgendarDemo, MetodosPagos, VisitaBlog, Footer } from './components'
import EjemploImg from './img/ejemplo.png';
import { Button } from '@mui/material';
//import '@splidejs/splide/css';
import '@splidejs/react-splide/css';

export const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      //window.scrollY te da los pixeles de desplazamiento vertical
      let currentScrollY = window.scrollY
      let landingHeader = document.querySelector('.landing-header');
      //getBoundingClientRect retorna información acerca del elemento seleccionado
      //en este caso solo queremos saber el alto de landingHeader
      let landingHeaderHeight = landingHeader.getBoundingClientRect().height;
      landingHeaderHeight = landingHeaderHeight - 100
      //preguntar que demonios sucede acá
      setIsScrolled(currentScrollY > landingHeaderHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
      <NavBar isScrolled={ isScrolled }/>
      <header className='landing-header'>
        <div className="container landing-header-content">
          <div className="row">
            <div className="landing-header-title col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h1>
                Software de gestión empresarial
              </h1>
              <p>
                Desarrollamos software de facturación electrónica, 
                gestión comercial y contabilidad. 
                Hecho por desarrolladores para desarrolladores, 
                emprendedores y empresas de software.
              </p>
              <hr />
              <Button
                variant='contained'
                sx={{
                  borderRadius: '20px',
                  backgroundColor: '#16194F',
                  '&:hover': {
                    backgroundColor: '#4D53C3'
                  }
                }}
              >
                Contactanos
              </Button>
            </div>
            <div className="landing-header-img col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <img src={ EjemploImg } alt="Ejemplo demo"/>
            </div>
          </div>
        </div>
      </header>

      <QuienesSomos />
      <NuestraExperiencia />
      <NuestrosServicios />
      <NuestrosClientes />
      <NuestrosPlanes />
      <Arquitectura />
      <Beneficios />
      <AgendarDemo />
      <MetodosPagos />
      <VisitaBlog />
      <Footer />
    </>
  )
}
