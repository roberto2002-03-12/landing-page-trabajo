import { useForm, useReclamoApi } from '../../../hooks';
import { TextField, Button, Select, MenuItem,
         FormControl, Box, InputLabel } from '@mui/material';
import '../styles/ListaReclamosStyle.css'

const inputs = {
  nombre_completo: '',
  tipo_persona: '',
  tipo_reclamo: '',
  tipo_contratado: '',
  fecha_creada: ''
};

const style = {
  marginLeft: '8px',
  marginRight: '8px',
  width: '200px'
};

export const FiltrosReclamo = () => {
  const { establecerFiltros, borrarFiltros } = useReclamoApi();

  const {
    nombre_completo,
    tipo_persona,
    tipo_reclamo,
    tipo_contratado,
    fecha_creada,
    onResetForm,
    onInputChange,
    formState
  } = useForm(inputs);

  const onSearchClaims = (event) => {
    event.preventDefault();

    if (!nombre_completo && fecha_creada && tipo_contratado && tipo_persona && tipo_reclamo) return;

    establecerFiltros(formState);
  }

  return (
    <>
      <h5 className='text-center lista-mensajes-filtros-h5'>Fitlros</h5>
      <div className="filtros-reclamos">
        <form onSubmit={ onSearchClaims }>
          <div className="filtros-reclamos-inputs">
            <TextField
              variant='outlined'
              label='Nombre de la persona'
              focused
              size='small'
              sx={style}
              name='nombre_completo'
              value={ nombre_completo }
              onChange={ onInputChange }
            />

            <TextField
              variant='outlined'
              label='Fecha creación'
              type='date'
              focused
              size='small'
              sx={style}
              name='fecha_creada'
              value={ fecha_creada }
              onChange={ onInputChange }
            />

            <FormControl variant='outlined' sx={style} size='small' focused>
              <InputLabel id="filtro-reclamo-tp">Tipo persona</InputLabel>
              <Select
                labelId="filtro-reclamo-tp"
                id="filtro-reclamo-tp"
                label="Tipo persona"
                defaultValue={ 'Persona Natural' }
                name='tipo_persona'
                value={ tipo_persona }
                onChange={ onInputChange }
              >
                <MenuItem value={'Persona Natural'}>Persona Natural</MenuItem>
                <MenuItem value={'Persona Juridica'}>Persona Juridica</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant='outlined' sx={style} size='small' focused>
              <InputLabel id="filtro-reclamo-tr">Tipo reclamo</InputLabel>
              <Select
                labelId="filtro-reclamo-tr"
                id="filtro-reclamo-tr"
                label="Tipo reclamo"
                defaultValue={ 'Queja' }
                name='tipo_reclamo'
                value={ tipo_reclamo }
                onChange={ onInputChange }
              >
                <MenuItem value={'Queja'}>Queja</MenuItem>
                <MenuItem value={'Reclamo'}>Reclamo</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant='outlined' sx={style} size='small' focused>
              <InputLabel id="filtro-reclamo-bc">Tipo contratado</InputLabel>
              <Select
                labelId="filtro-reclamo-bc"
                id="filtro-reclamo-bc"
                label="Tipo contratado"
                defaultValue={ 'Producto' }
                name='tipo_contratado'
                value={ tipo_contratado }
                onChange={ onInputChange }
              >
                <MenuItem value={'Producto'}>Producto</MenuItem>
                <MenuItem value={'Servicio'}>Servicio</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="filtros-reclamos-botones">
            <Button
              size='large'
              variant='outlined'
              type='submit'
              sx={{
                marginRight: '15px'
              }}
            >
              Buscar
            </Button>
            <Button
              variant='outlined'
              size='large'
              sx={{
                marginLeft: '15px'
              }}
              onClick={() => {
                borrarFiltros()
                onResetForm()
              }}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
