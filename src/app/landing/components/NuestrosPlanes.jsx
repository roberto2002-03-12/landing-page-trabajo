import { memo, useEffect, useState } from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import { Card, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const buttonStyle = {
    borderColor: '#4f1616',
    color: '#4f1616',
    borderRadius: '15px',
    '&:hover': {
        borderColor: '#4f1616'
    }
};

const cardStyle = {
    width: '350px',
    height: '750px',
    backgroundColor: 'white',
    boxShadow: '5px 8px #743b3b',
    borderRadius: '15px'
};

const aLinkStyle = {
    color: '#4f1616',
    textDecoration: 'none'
};

export const NuestrosPlanes = memo(() => {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        AOS.init({ offset: -100 });
        const mediaQuery = window.matchMedia("(min-width: 991px)");
        setIsWideScreen(mediaQuery.matches);
    }, []);

    return (
        <section className="landing-section-5" id='landing-section-5'>
            <h4 className='section-5-title'>Nuestros planes</h4>

            <div className="row">
                <div className="section-5-card-container col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <Card
                        style={cardStyle}
                        data-aos={ isWideScreen ? 'fade-right' : '' }
                        data-aos-duration="1000"
                    >
                        <div className="section-5-card-title">
                            <h4>Básico</h4>
                            <p>S/. 50 /mensual</p>
                        </div>
                        <div className="section-5-caracteristicas">
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Emite facturas, boletas, nota de crédito y otros documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Personalizado con logo e información de tu empresa.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Hasta 400 Documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Exporta reporte de venta.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Gestión de caja y POS.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Soporte gratuito e inmediato.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon 
                                    sx={{
                                        color: 'red'
                                    }}
                                />
                                <span>
                                    Gestiona tu caja diaria.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon 
                                    sx={{
                                        color: 'red'
                                    }}
                                />
                                <span>
                                    Incluye guía de remisión.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon 
                                    sx={{
                                        color: 'red'
                                    }}
                                />
                                <span>
                                    Control de inventario.
                                </span>
                            </div>
                        </div>
                        <div className="section-5-button">
                            <Button
                                variant="outlined"
                                sx={buttonStyle}
                            >
                                <a href="https://wa.link/6en89b" target='_blank' style={aLinkStyle}>
                                    Contactanos
                                </a>
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="section-5-card-container col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <Card
                        style={cardStyle}
                        data-aos={ isWideScreen ? 'fade-up' : ''}
                        data-aos-duration="2000"
                    >
                        <div className="section-5-card-title">
                            <h4>Plús</h4>
                            <p>S/. 80 /mensual</p>
                        </div>
                        <div className="section-5-caracteristicas">
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Emite facturas, boletas, nota de crédito y otros documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Personalizado con logo e información de tu empresa.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Documentos ilimitados.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Exporta reporte de venta.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Gestión de caja y POS.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Soporte gratuito e inmediato.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: 'green'
                                    }}
                                />
                                <span>
                                    Gestiona tu caja diaria.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon 
                                    sx={{color:'red'}}
                                />
                                <span>
                                    Incluye guía de remisión.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon 
                                    sx={{color:'red'}}
                                />
                                <span>
                                    Control de inventario.
                                </span>
                            </div>
                        </div>
                        <div className="section-5-button">
                            <Button
                                variant="outlined"
                                sx={buttonStyle}
                            >
                                <a href="https://wa.link/6en89b" target='_blank' style={aLinkStyle}>
                                    Contactanos
                                </a>
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="section-5-card-container col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <Card
                        style={cardStyle}
                        data-aos={ isWideScreen ? 'fade-left' : '' }
                        data-aos-duration="3000"
                    >
                        <div className="section-5-card-title">
                            <h4>Premium</h4>
                            <p>S/. 100 /mensual</p>
                        </div>
                        <div className="section-5-caracteristicas">
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Emite facturas, boletas, nota de crédito y otros documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Personalizado con logo e información de tu empresa.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Documentos ilimitados
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Exporta reporte de venta.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Gestión de caja y POS.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Soporte gratuito e inmediato.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Gestiona tu caja diaria.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Incluye guía de remisión.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon 
                                    sx={{color: 'green'}}
                                />
                                <span>
                                    Control de inventario.
                                </span>
                            </div>
                        </div>
                        <div className="section-5-button">
                            <Button
                                variant="outlined"
                                sx={buttonStyle}
                            >
                                <a href="" target='_blank' style={aLinkStyle}>
                                    Contactanos
                                </a>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
});
