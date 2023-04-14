import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useForm, useCategoriaApi, useBlogApi } from '../../../hooks';
import { NavBar } from '../components';
import { Cargando } from '../../components';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const inputs = {
  titulo: '',
  descripcion: '',
  urlBlog: '',
  categoriaId: ''
};

const inputsValidation = {
  titulo: [(value) => value.length >= 6, 'Debe tener por lo menos 6 caracteres'],
  descripcion: [(value) => value.length >= 100 && value.length < 1000, 'Debe tener por lo menos 100 caracteres o ser menor a 1000 caracteres'],
  urlBlog: [(value) => value.includes('https'), 'Debe ser una url valida'],
};

const style = {
  mb: 2, 
  width: '90%'
}

export const CrearBlog = () => {
  //react redux
  const { statusSubmitBlog, mensajeErrorBlog, mensajeExitoBlog } = useSelector(state => state.blog);
  //Hooks apis
  const { subirBlog, seleccionarBlog } = useBlogApi();
  const { categorias, listarCategorias } = useCategoriaApi();
  //Hook form
  const { titulo, descripcion, urlBlog, categoriaId,
    tituloValid, descripcionValid, urlBlogValid,
    formState, onInputChange, onResetForm, isFormValid } = useForm(inputs, inputsValidation);
  //Hook normales
  const [selectedFile, setSelectedFile] = useState([]);
  const [formSubmited, setFormSubmited] = useState(false);

  //solo listar por primera vez
  useMemo(() => {
    listarCategorias();
  }, []);

  //esto es para mensajeria
  useLayoutEffect(() => {
    if (mensajeErrorBlog !== undefined) Swal.fire('Error al enviar el blog', mensajeErrorBlog, 'error');
  }, [mensajeErrorBlog])

  useLayoutEffect(() => {
    if (mensajeExitoBlog !== undefined) Swal.fire('Exito al publicar el blog', mensajeExitoBlog, 'success');
  }, [mensajeExitoBlog])

  //esto para las imagenes
  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmitBlog = (event) => {
    event.preventDefault();

    setFormSubmited(true);

    if (!isFormValid) return;

    subirBlog(formState, selectedFile);
    setSelectedFile([]);
    setFormSubmited(false);
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                {
                  (statusSubmitBlog === 'revisando' ? (
                    <Cargando />
                  ) : (
                    <>
                    <h3 className='card-tittle text-center mb-4'>Crear blog</h3>
                    <div className="card-body-inputs">
                      <form onSubmit={ onSubmitBlog }>
                        <div className="form-group text-center">
                          <TextField
                            label='Título'
                            name={'titulo' }
                            value={titulo }
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
                          <FormControl required variant='outlined' sx={style} size='small'>
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
                        <div className="form-group" style={{ width: '90%', margin: '0 auto' }}>
                          <p style={{ margin: '0' }}>Imagen</p>
                          <input 
                            className='form-control' 
                            id='imageBlogInput' 
                            required 
                            type="file"
                            accept='image/jpeg, image/png' 
                            onChange={ handleImageChange }
                          />
                        </div>
                        <div className="form-group-blog-buttons">
                          <Button
                            variant='contained'
                            type='submit'
                            size='large'
                            sx={{
                              width: '200px'
                            }}
                            onClick={ onSubmitBlog }
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
                    </>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
