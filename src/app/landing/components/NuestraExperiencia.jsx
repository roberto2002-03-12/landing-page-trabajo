import { useEffect, memo } from 'react'
import { Grid } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const NuestraExperiencia = memo(() => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='landing-section-2'>
      <div className="container">
        <div className="row">
          <div className="section-2-text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h4>4 años en el rubro</h4>
              <p>Llevamos sirviendo a cientos de compañías desde 2019</p>
            </div>
          </div>
          <div className="section-2-grid col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <Grid 
              container 
              rowSpacing={ 2 }
              columnSpacing={{
                xs: 1,
              }}
              justifyContent="center"
              alignItems="center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Grid item xs={12} xl={6} lg={6}>
                <div className="section-2-note">
                  <WorkspacePremiumIcon
                    sx={{
                      width: '68px',
                      height: '68px'
                    }}
                  />
                  <div className="section-2-note-text">
                    <h5>ISO 27001</h5>
                    <p>Garantía de seguridad con certificación ISO 27001</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} xl={6} lg={6}>
                <div className="section-2-note">
                  <GppGoodOutlinedIcon
                    sx={{
                      width: '68px',
                      height: '68px'
                    }}
                  />
                  <div className="section-2-note-text">
                    <h5>ISO 27001</h5>
                    <p>Garantía de seguridad con certificación ISO 27001</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} xl={6} lg={6}>
                <div className="section-2-note">
                  <EngineeringIcon
                    sx={{
                      width: '68px',
                      height: '68px'
                    }}
                  />
                  <div className="section-2-note-text">
                    <h5>ISO 27001</h5>
                    <p>Garantía de seguridad con certificación ISO 27001</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} xl={6} lg={6}>
                <div className="section-2-note">
                  <SupportAgentIcon
                    sx={{
                      width: '68px',
                      height: '68px'
                    }}
                  />
                  <div className="section-2-note-text">
                    <h5>ISO 27001</h5>
                    <p>Garantía de seguridad con certificación ISO 27001</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
});
