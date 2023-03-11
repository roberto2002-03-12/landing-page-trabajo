import { memo } from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import { Card, Button } from '@mui/material';

const buttonStyle = {
    borderColor: '#16194F',
    color: '#16194F',
    borderRadius: '15px'
}

const cardStyle = {
    width: '350px',
    height: '750px',
    backgroundColor: 'white',
    boxShadow: '5px 8px #3E3B74',
    borderRadius: '15px'
}

export const NuestrosPlanes = memo(() => {
    console.log('deberia renderizarme una vez')
    return (
        <section className="landing-section-5">
            <h4 className='section-5-title'>Nuestros planes</h4>

            <div className="row">
                <div className="section-5-card-container col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <Card
                        style={cardStyle}
                    >
                        <div className="section-5-card-title">
                            <h4>Básico</h4>
                            <p>S/. 50 /m</p>
                        </div>
                        <div className="section-5-caracteristicas">
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Emite facturas, boletas, nota de crédito y otros documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Personalizado con logo e información de tu empresa.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Hasta 400 Documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Exporta reporte de venta.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Gestión de caja y POS.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Soporte gratuito e inmediato.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon />
                                <span>
                                    Gestiona tu caja diaria.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon />
                                <span>
                                    Incluye guía de remisión.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon />
                                <span>
                                    Control de inventario.
                                </span>
                            </div>
                        </div>
                        <div className="section-5-button">
                            <Button
                                variant="outlined"
                                style={buttonStyle}
                            >
                                Contactanos
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="section-5-card-container col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <Card
                        style={cardStyle}
                    >
                        <div className="section-5-card-title">
                            <h4>Plús</h4>
                            <p>S/. 80 /m</p>
                        </div>
                        <div className="section-5-caracteristicas">
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Emite facturas, boletas, nota de crédito y otros documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Personalizado con logo e información de tu empresa.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Documentos ilimitados.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Exporta reporte de venta.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Gestión de caja y POS.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Soporte gratuito e inmediato.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Gestiona tu caja diaria.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon />
                                <span>
                                    Incluye guía de remisión.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <UnpublishedOutlinedIcon />
                                <span>
                                    Control de inventario.
                                </span>
                            </div>
                        </div>
                        <div className="section-5-button">
                            <Button
                                variant="outlined"
                                style={buttonStyle}
                            >
                                Contactanos
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="section-5-card-container col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <Card
                        style={cardStyle}
                    >
                        <div className="section-5-card-title">
                            <h4>Premium</h4>
                            <p>S/. 100 /m</p>
                        </div>
                        <div className="section-5-caracteristicas">
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Emite facturas, boletas, nota de crédito y otros documentos.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Personalizado con logo e información de tu empresa.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Documentos ilimitados
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Exporta reporte de venta.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Gestión de caja y POS.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Soporte gratuito e inmediato.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Gestiona tu caja diaria.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Incluye guía de remisión.
                                </span>
                            </div>
                            <div className="caracteristicas-opciones">
                                <CheckCircleOutlineOutlinedIcon />
                                <span>
                                    Control de inventario.
                                </span>
                            </div>
                        </div>
                        <div className="section-5-button">
                            <Button
                                variant="outlined"
                                style={buttonStyle}
                            >
                                Contactanos
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
});
