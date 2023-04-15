import React, { memo } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

export const VisitaBlog = memo(() => {
  return (
    <section className="landing-section-10">
        <div className="row">
            <div className="visita-blog col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12">
                <div className="visita-blog-content">
                    <h4>Visita nuestros Blogs</h4>
                    <Button
                        variant='outlined'
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            borderRadius: '20px',
                            '&:hover': {
                                borderColor: 'white'
                            },
                            width: '150px',
                            height: '45px',
                        }}
                    >
                        <Link to={'/blog'} style={{ color: 'white', textDecoration: 'none' }}>
                            Visitar
                        </Link>
                    </Button>
                    <p>
                        Mantente al tanto de guías o información útil que te puede ayudar en tu empresa
                    </p>
                </div>
            </div>
        </div> 
    </section>
  )
});
