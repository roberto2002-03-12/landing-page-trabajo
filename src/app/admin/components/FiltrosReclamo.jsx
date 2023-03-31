import {  } from '../../../hooks';
import { TextField, Button } from '@mui/material';

const style = {
  marginLeft: '8px',
  marginRight: '8px'
};

export const FiltrosReclamo = () => {
  return (
    <>
      <h5></h5>
      <div className="filtros-reclamos">
        <form action="">
          <TextField
            variant='outlined'
            label='Nombre de la persona'
            focused
            size='small'
            sx={style}
          />
          <TextField
            variant='outlined'
            label='Fecha creación'
            type='date'
            focused
            size='small'
            sx={style}
          />
          <TextField
            variant='outlined'
            label='Tipo persona'
            focused
            size='small'
            sx={style}
          />
          <TextField
            variant='outlined'
            label='Tipo reclamo'
            focused
            size='small'
            sx={style}
          />
          <TextField
            variant='outlined'
            label='Bien contratado'
            focused
            size='small'
            sx={style}
          />
          <Button
            size='large'
          >
            Buscar
          </Button>
          <Button
            size='large'
          >
            Cancelar
          </Button>
        </form>
      </div>
    </>
  )
}
