import { useState } from 'react';
import { useForm, useAuthApi } from '../../hooks';
import { TextField, Box, CircularProgress, Button } from '@mui/material';
import Swal from 'sweetalert2';

const inputStyle = {
  width: '100%',
  paddingBottom: '25px'
}

const inputs = {
  token: '',
  password: '',
  passwordConfirm: ''
};

const inputsValid = {
  token: [(value) => value.length >= 70, 'token no valido'],
  password: [(value) => value.length >= 8, 'La nueva contraseña debe tener como minimo 8 caracteres'],
  passwordConfirm: [(value) => value.length >= 8, 'Contraseña invalida']
};

export const CambiarContrasena = () => {
  const { token, password, passwordConfirm,
          tokenValid, passwordValid, passwordConfirmValid,
          formState, isFormValid, onInputChange, onResetForm } = useForm(inputs, inputsValid);
  
  const { recuperacionCuenta } = useAuthApi();

  const [formSubmited, setFormSubmited] = useState(false);
  

  const onRecuperarContrasena = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) Swal.fire('Contraseña incorrecta', 'Las contraseñas deben ser iguales para poder continuar', 'error');

    setFormSubmited(true);

    if (!isFormValid) return;

    recuperacionCuenta(formState);
    setFormSubmited(false);
  };

  return (
    <div className='input-box-cambiar-contrasena'>
      {
        (formSubmited === true ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            <CircularProgress/>
          </Box>
        ) : (
        <form onSubmit={ onRecuperarContrasena }>
          <h5 className='text-center'>Cambiar contraseña</h5>
          <TextField
            variant='outlined'
            size='small'
            type='text'
            label='Código'
            name='token'
            value={ token }
            onChange={ onInputChange }
            error={ !!tokenValid && formSubmited }
            helperText={ !!tokenValid && formSubmited ? tokenValid : '' }
            sx={inputStyle}
            autoComplete='token'
          />
          <TextField
            variant='outlined'
            size='small'
            type='password'
            label='Contraseña'
            name='password'
            value={ password }
            onChange={ onInputChange }
            error={ !!passwordValid && formSubmited }
            helperText={ !!passwordValid && formSubmited ? passwordValid : '' }
            sx={inputStyle}
            autoComplete='new-password'
          />
          <TextField
            variant='outlined'
            size='small'
            type='password'
            label='Confirmar contraseña'
            name='passwordConfirm'
            value={ passwordConfirm }
            onChange={ onInputChange }
            error={ !!passwordConfirmValid && formSubmited }
            helperText={ !!passwordConfirmValid && formSubmited ? passwordConfirmValid : '' }
            sx={inputStyle}
            autoComplete='new-password'
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
