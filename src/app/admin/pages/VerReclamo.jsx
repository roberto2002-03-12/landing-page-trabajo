import React from 'react';
import { Container, Grid, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  label: {
    fontWeight: 'bold',
  },
}));

const reclamo = {
  idformulario: 11,
  nombreCompleto: "Edwin Dada Dada",
  tipoPersona: "Persona Juridica",
  razonSocial: "No tengo idea",
  domicilio: "Cerca de puente pedagogico",
  departamento: "Lima",
  provincia: "Lima",
  distrito: "Santiago De Surco",
  docIdentidad: "RUC",
  nroDocumento: 73636734,
  telefono: 965368241,
  email: "emilio.contreras@tecsup.edu.pe",
  tipoReclamo: "Reclamo",
  bienContratado: "Producto",
  documentoNombre: "archivo_pdf-1679606984131-Roberto_contreras.pdf",
  documentoLink: "https://ucvcid-test-3.s3.sa-east-1.amazonaws.com/archivo_pdf-1679606984131-Roberto_contreras.pdf",
  detalleDelProducto: "No se que poner, esto solo es una prueba de texto",
  detalleDelReclamo: "No se que poner, esto solo es una prueba de texto",
  autorizoActo: true,
  createdAt: "2023-03-23T21:29:45.000Z"
};

export const VerReclamo = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.label}>ID Formulario: </Typography>
          <Typography>{reclamo.idformulario}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
