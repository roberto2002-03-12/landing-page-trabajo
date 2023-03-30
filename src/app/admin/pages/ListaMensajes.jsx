import { useEffect, useState } from 'react';
import { useForm, useMessageApi } from '../../../hooks';
import { NavBar, TablaMensaje } from '../components';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import '../styles/ListaMensajesStyle.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const inputs = {
  nombre_completo: '',
  fecha_creada: ''
};

export const ListaMensajes = () => {
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const { listarMensajes, messages } = useMessageApi();

  useEffect(() => {
    listarMensajes();
  }, []);
  
  //form
  const {
    nombre_completo,
    fecha_creada,

    onInputChange,
    onResetForm,
    formState
  } = useForm(inputs);

  const onSearchMessages = (event) => {
    event.preventDefault();

    if (!nombre_completo && !fecha_creada) return;

    console.log(formState);
  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <h5 className='text-center lista-mensajes-filtros-h5'>Filtros</h5>
        <div className="filtros-mensajes">
          <form onSubmit={ onSearchMessages }>
            <TextField
              variant='outlined'
              label='Nombre de la persona'
              focused
              size='small'
              sx={{
                marginLeft: '15px',
                marginRight: '15px'
              }}
              onChange={ onInputChange }
              name='nombre_completo'
              value={ nombre_completo }
            />
            <TextField
              variant='outlined'
              type='date'
              label='Fecha'
              focused
              size='small'
              sx={{
                marginLeft: '15px',
                marginRight: '15px'
              }}
              onChange={ onInputChange }
              name='fecha_creada'
              value={ fecha_creada }
            />
            <Button
              variant='outlined'
              type='submit'
              size='large'
              sx={{
                marginLeft: '15px',
                marginRight: '15px'
              }}
            >
              Buscar
            </Button>
          </form>
        </div>
        <hr />
        <br />
        <TablaMensaje />
      </div>
    </>
  )
}
