import { memo } from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export const Footer = memo(() => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
                <span>Siguenos en nuestras redes</span>
            </div>
    
            <div>
                <a href='' className='me-4 text-reset'>
                <FacebookIcon />
                </a>
                <a href='' className='me-4 text-reset'>
                <LinkedInIcon />
                </a>
                <a href='' className='me-4 text-reset'>
                <GitHubIcon />
                </a>
            </div>
            </section>
    
            <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon color='secondary' icon='gem' />
                    DYF Contadores y abogados
                    </h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit.
                    </p>
                </MDBCol>
    
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Otros</h6>
                    <p>
                    <a href='#!' className='text-reset'>
                        Formulario de quejas
                    </a>
                    </p>
                    <p>
                    <a href='#!' className='text-reset'>
                        Blog
                    </a>
                    </p>
                </MDBCol>
    
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Repositorios de código abierto</h6>
                    <p>
                    <a href='https://gitlab.com/b.mendoza/facturadorpro3' className='text-reset' target='_blank'>
                        Facturador PRO3
                    </a>
                    </p>
                    <p>
                    <a href='https://gitlab.com/cristian.ballon/api_ruc' className='text-reset' target='_blank'>
                        Consulta RUC
                    </a>
                    </p>
                    <p>
                    <a href='https://gitlab.com/cristian.ballon/api_ruc' className='text-reset' target='_blank'>
                        Validación QR Comprobantes
                    </a>
                    </p>
                    <p>
                    <a href='https://gitlab.com/carlomagno83/apifacturalopro' className='text-reset' target='_blank'>
                        API Factura pro
                    </a>
                    </p>
                    <p>
                    <a href='https://gitlab.com/rash07/wp-api-facturaloperu' className='text-reset' target='_blank'>
                        Plugin WooComerce
                    </a>
                    </p>
                </MDBCol>
    
                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                    <HomeIcon className='me-3' />
                    Calle las Camelias 657, San Isidro 15046
                    </p>
                    <p>
                    <EmailIcon className='me-3'/>
                    dyfcontyabog@gmail.com
                    </p>
                    <p>
                    <CallIcon className='me-3'/>
                    +51 01 221 4686
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </section>
    
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright: 
            <a className='text-reset fw-bold' href='https://contadoresabogados.com.pe/'>
                contadoresabogados.com.pe
            </a>
            </div>
        </MDBFooter>
    )
});
