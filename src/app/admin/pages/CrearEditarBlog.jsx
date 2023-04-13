import { useMemo, useState } from 'react';
import { useForm, useCategoriaApi } from '../../../hooks';
import { NavBar } from '../components';
import { Cargando } from '../../components';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const inputs = {
  titulo: '',
  descripcion: '',
  urlBlog: '',
  categoriaId: ''
};

const inputsValidation = {
  titulo: [(value) => value.length >= 6, 'Debe tener por lo menos 6 caracteres'],
  descripcion: [(value) => value.length >= 100, 'Debe tener por lo menos 100 caracteres'],
  urlBlog: [(value) => value.includes('https'), 'Debe ser una url valida'],
  categoriaId: [(value) => value.length >= 1, 'Tiene que ser una categoria valida']
};

const style = {
  mb: 2, 
  width: '90%'
}

export const CrearEditarBlog = () => {
  const { categorias, listarCategorias } = useCategoriaApi();
  const [formSubmited, setFormSubmited] = useState(false);

  const { titulo, descripcion, urlBlog, categoriaId,
          tituloValid, descripcionValid, urlBlogValid, categoriaIdValid,
          formState, onInputChange, onResetForm, isFormValid } = useForm(inputs, inputsValidation);

  useForm(() => {
    listarCategorias();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <h3 className='card-tittle text-center mb-4'>Crear blog</h3>
                <div className="card-body-inputs">
                  <form>
                    <div className="form-group text-center">
                      <TextField
                        label='Título'
                        name='titulo'
                        value={ titulo }
                        onChange={ onInputChange }
                        error={ !!tituloValid && formSubmited }
                        helperText={ !!tituloValid && formSubmited ? tituloValid : '' }
                        variant='outlined'
                        required
                        size='small'
                        sx={style}
                      />
                    </div>
                    <div className="form-group text-center">
                      <TextField
                        label='Descripción'
                        name='descripcion'
                        value={ descripcion }
                        onChange={ onInputChange }
                        error={ !!descripcionValid && formSubmited }
                        helperText={ !!descripcionValid && formSubmited ? descripcionValid : '' }
                        variant='outlined'
                        required
                        multiline
                        rows={ 8 }
                        size='small'
                        sx={style}
                      />
                    </div>
                    <div className="form-group text-center">
                      <TextField
                        label='URL del blog'
                        name='urlBlog'
                        value={ urlBlog }
                        onChange={ onInputChange }
                        error={ !!urlBlogValid && formSubmited }
                        helperText={ !!urlBlogValid && formSubmited ? urlBlogValid : '' }
                        variant='outlined'
                        required
                        size='small'
                        sx={style}
                      />
                    </div>
                    <div className="form-group text-center">
                      <FormControl variant='outlined' sx={style} size='small'>
                        <InputLabel id="filtro-blog-tp">Categoria</InputLabel>
                        <Select
                          labelId='filtro-blog-tp'
                          id='filtro-blog-tp'
                          label="Categoria"
                          defaultValue={ 'SUNAT' }
                          name='categoriaId'
                          value={ categoriaId }
                          onChange={ onInputChange }
                        >
                          {
                            categorias.map((cat) => (
                              <MenuItem value={cat.idcategoria} key={cat.idcategoria}>{cat.nombre}</MenuItem>
                            ))
                          }
                        </Select>
                      </FormControl>
                    </div>
                    <div className="form-group-blog-buttons">
                      <Button
                        variant='contained'
                        type='submit'
                        size='large'
                        sx={{
                          width: '200px'
                        }}
                      >
                        Crear
                      </Button>
                      <Button
                        variant='outlined'
                        size='large'
                        onClick={() => {
                          onResetForm();
                        }}
                        sx={{
                          width: '200px'
                        }}
                      >
                        <Link to='/admin/lista-blogs'>
                          Cancelar
                        </Link>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
