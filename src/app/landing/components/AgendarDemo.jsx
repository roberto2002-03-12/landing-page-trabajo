import { memo } from 'react';
import AgendarImg from '../img/contactanos.svg';
import { Button } from '@mui/material';

export const AgendarDemo = memo(() => {
  return (
    <section className="landing-section-8" id='landing-section-8'>
        <div className="row">
            <h4>¡Agenda una demo!</h4>
            <div className="agendar-demo-1 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div>
                    <p>
                    ¿Quieres ver nuestro software en acción? ¡Envíanos un mensaje para una demostración hoy mismo! Uno de nuestros expertos estará encantado de guiarte a través de nuestro software y responder a cualquier pregunta que tengas.
                    </p>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '15px',
                            fontSize: '18px',
                            backgroundColor: '#bd1c1c',
                            '&:hover': {
                                backgroundColor: '#af1d1d'
                            },
                        }}
                    >
                        Contactar
                    </Button>
                </div>
            </div>
            <div className="agendar-demo-2 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <img src={AgendarImg} alt=""/>
            </div>
        </div>
    </section>
  )
});
