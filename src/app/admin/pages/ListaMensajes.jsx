import { useEffect, useState } from 'react';
import { useForm, useMessageApi } from '../../../hooks';
import { NavBar, TablaMensaje, FiltrosMensaje } from '../components';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import '../styles/ListaMensajesStyle.css'

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
        <FiltrosMensaje />
        <hr />
        <br />
        <TablaMensaje />
      </div>
    </>
  )
}
