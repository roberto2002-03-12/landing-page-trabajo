import { useState, useEffect, useRef } from 'react';
import { useForm } from '../../hooks';
import { useFormularioApi } from '../../hooks/useFormularioApi';
import './styles/LandingStyle.css';
import '@splidejs/react-splide/css';
import { NavBar, QuienesSomos, NuestraExperiencia, NuestrosServicios, 
         NuestrosClientes, NuestrosPlanes, Arquitectura,
         Beneficios, AgendarDemo, MetodosPagos, VisitaBlog, Footer, BotonSubirArriba } from './components'
import { Button, Card, TextField, CircularProgress, Box } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';

const inputStyle = {
  width: '345px',
  marginTop: '20px',
  borderColor: '#554DDE',
  '@media (max-width: 991px)': {
    width: '297.5px'
  },
}

/*Datos del formulario*/
const formularioCampos = {
  nombreCompleto: '',
  numeroCelular: '',
  mensaje: '',
}
/*Validacion*/
const formularioCamposValidaciones = {
  nombreCompleto: [(value) => value.length >= 8, 'No has puesto tu nombre completo'],
  numeroCelular: [(value) => value.length >=  7, 'Número de celular no valido']
}

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //hook para usar api
  const { subirMensaje, mensajeError, mensajeExito, estado } = useFormularioApi();

  /*Formulario*/
  const {
    nombreCompleto,
    numeroCelular,
    mensaje,
    onInputChange,

    nombreCompletoValid,
    numeroCelularValid,
    isFormValid,
    formState,
    onResetForm
  } = useForm(formularioCampos, formularioCamposValidaciones);

  const recaptchaRef = useRef(null);

  useEffect(() => {
    recaptchaRef.current.reset();
  }, []);

  //datos para recaptcha
  const [captchaToken, setCaptchaToken] = useState('');

  const onChangeCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const [formSubmited, setFormSubmited] = useState(false);

  const onSubmitMensaje = (event) => {
    event.preventDefault();

    if (!captchaToken) {
      Swal.fire('Error al enviar mensaje', 'No has verificado que seas humano', 'error');
      return;
    } 

    setFormSubmited(true);

    if (!isFormValid) return;

    subirMensaje(formState, captchaToken);

    onResetForm();

    setFormSubmited(false);
  }

  //manejar mensajes
  useEffect(() => {
    if (mensajeError !== undefined) {
      Swal.fire('Error al subir mensaje', mensajeError, 'error');
    }
  }, [mensajeError]);

  useEffect(() => {
    if (mensajeExito !== undefined) {
      Swal.fire('Se subio el mensaje', mensajeExito, 'success');
    }
  }, [mensajeExito]);

  /*Scroll*/
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      //window.scrollY te da los pixeles de desplazamiento vertical
      let currentScrollY = window.scrollY
      let landingHeader = document.querySelector('.landing-header');
      //getBoundingClientRect retorna información acerca del elemento seleccionado
      //en este caso solo queremos saber el alto de landingHeader
      let landingHeaderHeight = landingHeader.getBoundingClientRect().height;
      landingHeaderHeight = landingHeaderHeight - 700
      //preguntar que demonios sucede acá
      setIsScrolled(currentScrollY > landingHeaderHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
      <NavBar isScrolled={ isScrolled }/>
      <BotonSubirArriba />
      <header className='landing-header' id='landing-header'>
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
              <div>
                <Button
                  className='contactenos-button'
                  variant='contained'
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: '#f72121',
                    '&:hover': {
                      backgroundColor: '#af1d1d'
                    },
                    '@media (max-width: 768px)' : {
                      marginTop: '15px',
                      marginBottom: '30px',
                      textAlign: 'center',

                    }
                  }}
                >
                  <a href="https://wa.link/6en89b" target='_blank' style={{color: 'white', textDecoration: 'none'}}>Contactanos</a>
                </Button>
              </div>

            </div>
            <div className="landing-header-form col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div
                style={{
                  height: '400px',
                  minHeight: '530px',
                  maxHeight: '580px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  maxWidth: '400px',
                  '@media (maxWidth: 600px)': {
                    width: '350px'
                  },
                  margin: '0 auto'
                }}
              >
                <h5>¡Contactanos!</h5>
                <div className='header-form-text'>
                  <p>Llena tus datos y pronto estaremos en contacto</p>
                </div>
                
                {
                  (estado === 'revisando' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                      <CircularProgress/>
                    </Box>
                  ) : (
                    <form onSubmit={ onSubmitMensaje }>
                      <TextField
                        label='Nombre completo'
                        name='nombreCompleto'
                        value={ nombreCompleto }
                        onChange={ onInputChange }
                        error={ !!nombreCompletoValid && formSubmited }
                        helperText={ !!nombreCompletoValid && formSubmited ? nombreCompletoValid : '' }
                        variant='outlined'
                        required
                        sx={{
                          width: '345px',
                          borderColor: '#554DDE',
                          '@media (max-width: 991px)': {
                            width: '297.5px'
                          }
                        }}
                      />
                      <TextField
                        label='Número celular'
                        name='numeroCelular'
                        type='number'
                        value={ numeroCelular }
                        onChange={ onInputChange }
                        error={ !!numeroCelularValid && formSubmited }
                        helperText={ !!numeroCelularValid && formSubmited ? numeroCelularValid : '' }
                        variant='outlined'
                        required
                        sx={inputStyle}
                        onInput={({target}) => {
                          target.value = target.value.slice(0, 9)
                        }}
                      />
                      <TextField
                        label="Mensaje"
                        name='mensaje'
                        value={ mensaje }
                        onChange={ onInputChange }
                        multiline
                        rows={2}
                        variant='outlined'
                        required
                        sx={inputStyle}
                        inputProps={{
                          maxLength: 150
                        }}
                      />
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={'6LfvmJYlAAAAAEgjsONXL6v4t_-e1XDfCgtlm9ji'}
                          onChange={onChangeCaptcha}
                          style={{paddingTop: '14px'}}
                          size='normal'
                        />
                      </div>
                      <Button
                        variant='contained'
                        sx={{
                          marginTop: '15px',
                          borderRadius: '20px',
                          width: '345px',
                          '@media (max-width: 991px)': {
                            width: '297.5px'
                          },
                          backgroundColor: '#f72121',
                          '&:hover': {
                            backgroundColor: '#af1d1d'
                          }
                        }}
                        type='submit'
                      >
                        Enviar
                      </Button>
                    </form>
                  )
                  )
                }
              </div>
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
