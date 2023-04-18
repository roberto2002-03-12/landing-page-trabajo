import { useState, useMemo, useLayoutEffect, useEffect } from 'react';
import { useCategoriaApi, useBlogApi } from '../../../hooks';
import { NavBar } from '../components';
import { Cargando } from '../../components';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const style = {
  mb: 2, 
  width: '90%'
};

export const EditarBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //react redux
  const { statusSubmitBlog, mensajeErrorBlog, mensajeExitoBlog, blog } = useSelector(state => state.blog);
  //Hooks apis
  const { editarBlog, seleccionarBlog, borrarBlog } = useBlogApi();
  const { categorias, listarCategorias } = useCategoriaApi();
  
  window.addEventListener('popstate', () => {
    borrarBlog()
  });

  //esta parte es para el formulario
  const [formStateUpdate, setFormStateUpdate] = useState({
    titulo: blog?.titulo || '',
    descripcion: blog?.descripcion || '',
    urlBlog: blog?.urlBlog || '',
    categoriaId: blog?.categoriaId || ''
  });

  //realizar cambios
  const onInputUpdateChange = ({target}) => {
    const { name, value } = target;
    setFormStateUpdate({
      ...formStateUpdate,
      [name]: value
    })
  };

  //Esto es para manejar las imagenes
  const [selectedFile, setSelectedFile] = useState([]);
  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const { id } = useParams()

  useMemo(() => {
    listarCategorias();
  }, []);

  useMemo(() => {
    if (id !== undefined) { 
      seleccionarBlog(id);
    }
  }, [id]);

  useMemo(() => {
    if (blog !== null) {
      setFormStateUpdate({
        titulo: blog?.titulo,
        descripcion: blog?.descripcion,
        urlBlog: blog?.urlBlog,
        categoriaId: blog?.categoriaId
      })
    }
  }, [blog]);

  //esto es para mensajeria
  useLayoutEffect(() => {
    if (mensajeErrorBlog !== undefined) Swal.fire('Error al enviar el blog', mensajeErrorBlog, 'error');
  }, [mensajeErrorBlog]);

  useLayoutEffect(() => {
    if (mensajeExitoBlog !== undefined) Swal.fire('Exito al editar el blog', mensajeExitoBlog, 'success');
  }, [mensajeExitoBlog]);

  //subir los datos
  const onSubmitBlog = (event) => {
    event.preventDefault();
    editarBlog(formStateUpdate, selectedFile, id);
    setSelectedFile([]);
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
                    <h3 className='card-tittle text-center mb-4'>Actualizar blog</h3>
                    <div className="card-body-inputs">
                      <form onSubmit={ onSubmitBlog }>
                        <div className="form-group text-center">
                          <TextField
                            label='Título'
                            name={'titulo' }
                            value={ formStateUpdate.titulo }
                            onChange={ onInputUpdateChange }
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
                            value={ formStateUpdate.descripcion }
                            onChange={ onInputUpdateChange }
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
                            value={ formStateUpdate.urlBlog }
                            onChange={ onInputUpdateChange }
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
                              defaultValue={ '' }
                              name='categoriaId'
                              value={ formStateUpdate.categoriaId }
                              onChange={ onInputUpdateChange }
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
                            Editar
                          </Button>
                          <Button
                            variant='outlined'
                            size='large'
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
