import { useState, useEffect } from 'react';
import { useAuthApi, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { TextField, Button, CircularProgress, Box } from '@mui/material';
import '../styles/EnviarEmailStyle.css';

const input = { email: '' };

const inputValid = {
  email: [(value) => value?.includes('@'), 'El email no es valido']
};

export const EnviarEmail = () => {
  const { email, emailValid, onInputChange, onResetForm, isFormValid, formState } = useForm(input, inputValid);
  const { mensajeErrorEmail, mensajeExitoEmail, estadoEmail, enviarEmail } = useAuthApi();
  const [formSubmited, setFormSubmited] = useState(false);

  const onEnviarEmail = (event) => {
    event.preventDefault();

    setFormSubmited(true);

    if (!isFormValid) return;

    enviarEmail(formState);

    setFormSubmited(false);
    onResetForm();
  };

  useEffect(() => {
    if (mensajeExitoEmail !== undefined) {
      Swal.fire('Correo enviado', mensajeExitoEmail, 'success');
    };
  }, [mensajeExitoEmail]);

  useEffect(() => {
    if (mensajeErrorEmail !== undefined) {
      Swal.fire('El correo no se envío', mensajeErrorEmail, 'error');
    };
  }, [mensajeErrorEmail]);

  return (
    <div className='input-box-enviar-email'>
      {
        (estadoEmail === 'revisando' ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            <CircularProgress/>
          </Box>
        ) : (
          <form onSubmit={ onEnviarEmail }>
            <p className='text-enviar-email'>
              Ingresa tu email para enviarte un código que
              te permitirá cambiar tu contraseña
            </p>
            <TextField
              size='small'
              variant='outlined'
              type='email'
              label='Ingresa email para enviar código'
              name='email'
              value={ email }
              error={ !!emailValid && formSubmited }
              helperText={ !!emailValid && formSubmited ? emailValid : '' }
              onChange={ onInputChange }
              sx={{
                width: '100%',
                paddingBottom: '30px'
              }}
            />
            <Button
              variant='contained'
              sx={{
                width: '100%'
              }}
              type='submit'
            >
              Enviar
            </Button>
          </form>
        ))
      }
    </div>
  )
}
