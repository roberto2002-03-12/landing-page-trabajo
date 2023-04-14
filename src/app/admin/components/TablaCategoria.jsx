import { useState, useMemo, memo } from 'react';
import { useSelector } from 'react-redux';
import { useCategoriaApi, useForm } from '../../../hooks';
import { FilaCategoria } from './';
import { Cargando } from '../../components';
import ReactPaginate from 'react-paginate';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 150,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const input = {
  nombre: ''
}

const inputValidation = {
  nombre: [(value) => value.length >= 4 && value.length <= 40, 'Debe tener por lo menos 4 caracteres']
}

export const TablaCategoria = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalState, setModalState] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);
  const { listarCategorias, categorias, paginas, isLoadingCat, crearCategoria } = useCategoriaApi();
  const { nombre, nombreValid, formState, isFormValid, onInputChange, onResetForm } = useForm(input, inputValidation);

  const cambiarPagina = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const abrirModal = () => setModalState(true);

  const cerrarModal = () => {
    onResetForm();
    setModalState(false);
  }

  useMemo(() => {
    listarCategorias(currentPage * 20);
  }, [currentPage]);

  const onSubmitCategoria = (event) => {
    event.preventDefault();

    setFormSubmited(true);

    if (!isFormValid) return;

    crearCategoria(formState);

    setFormSubmited(false);

    onResetForm();

    cerrarModal();
  };

  return (
    <>
      <div className="text-center" style={{paddingTop: '50px'}}>
        <Button
          variant='contained'
          size='large'
          onClick={ abrirModal }
        >
          Crear
        </Button>
      </div>
      <hr />
      <br />
      {
        (isLoadingCat === true ? (
          <Cargando />
        ) : (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nombre categoria</th>
                <th scope='col'>Fecha creación</th>
              </tr>
            </thead>
            <tbody>
              {
                categorias.map((cat) => (
                  <FilaCategoria props={ cat } key={ cat.idcategoria } />
                ))
              }
            </tbody>
          </table>
        ))
      }

      <Modal
        keepMounted
        open={ modalState }
        onClose={ cerrarModal }
        aria-labelledby="keep-mounted-modal-nombre-categoria"
        aria-describedby="keep-mounted-modal-input-categoria"
      >
        <Box sx={style}>
          <div id="keep-mounted-modal-nombre-categoria" style={{textAlign: 'center'}} variant='h6' component="h2">
            Crear nueva categoría
          </div>
          <div id="keep-mounted-modal-input-categoria" style={{marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={ onSubmitCategoria }>
              <TextField
                variant='outlined'
                label='Nombre de categoría'
                size='small'
                name='nombre'
                value={ nombre }
                onChange={ onInputChange }
                error={ !!nombreValid && formSubmited }
                helperText={ !!nombreValid && formSubmited ? nombreValid : '' }
                required
              />
              <Button
                variant='contained'
                size='large'
                sx={{
                  marginLeft: '10px',
                  height: '40px'
                }}
                type='submit'
              >
                Subir
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  )
}
