import React from 'react';
import AgendarImg from '../img/agendar.svg';
import { Button } from '@mui/material';

export const AgendarDemo = () => {
  return (
    <section className="landing-section-8">
        <div className="row">
            <h4>¡Agenda una demo!</h4>
            <div className="agendar-demo-1 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div>
                    <p>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos 
                        de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias 
                        desde el año 1500 archivos de texto.
                    </p>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '15px',
                            fontSize: '18px',
                            backgroundColor: '#16194F'
                        }}
                    >
                        Contactar
                    </Button>
                </div>
            </div>
            <div className="agendar-demo-2 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <img src={AgendarImg} alt="" />
            </div>
        </div>
    </section>
  )
}
