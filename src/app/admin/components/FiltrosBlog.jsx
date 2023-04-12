import { useMemo } from 'react';
import { useForm } from '../../../hooks';
import { useCategoriaApi } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { onSetFiltersBlogs, onResetFiltersBlogs } from '../../../store';
import { TextField, Button, Select, MenuItem,
         FormControl, InputLabel } from '@mui/material';

const inputs = {
  titulo_blog: '',
  categoria_blog: ''
};

const style = {
  marginLeft: '15px',
  marginRight: '15px'
};

export const FiltrosBlog = () => {
  const dispatch = useDispatch();
  const { categorias, listarCategorias } = useCategoriaApi();
  const { titulo_blog, categoria_blog, onInputChange, formState, onResetForm } = useForm(inputs);

  useMemo(() => {
    listarCategorias();
  }, []);

  const onSearchBlog = (event) => {
    event.preventDefault();

    if (!titulo_blog && !categoria_blog) return;

    dispatch(onSetFiltersBlogs(formState));
  };

  return (
    <>
      <h5 className='text-center lista-blog-filtros-h5'>Filtros</h5>
      <div className="filtros-blog">
        <form onSubmit={ onSearchBlog }>
          <TextField
            variant='outlined'
            label='Título de blog'
            focused
            size='small'
            sx={style}
            onChange={ onInputChange }
            name='titulo_blog'
            value={ titulo_blog }
          />
          <FormControl variant='outlined' sx={{ ...style, width: '200px' }} size='small' focused>
            <InputLabel id="filtro-blog-tp">Categoria</InputLabel>
            <Select
              labelId='filtro-blog-tp'
              id='filtro-blog-tp'
              label="Categoria"
              defaultValue={ 'SUNAT' }
              name='categoria_blog'
              value={ categoria_blog }
              onChange={ onInputChange }
            >
              {
                categorias.map((cat) => (
                  <MenuItem value={cat.idcategoria} key={cat.idcategoria}>{cat.nombre}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <Button
            variant='outlined'
            type='submit'
            size='large'
            sx={style}
          >
            Buscar
          </Button>
          <Button
            variant='outlined'
            size='large'
            onClick={() => {
              onResetForm()
              dispatch(onResetFiltersBlogs())
            }}
          >
            Restablecer
          </Button>
        </form>
      </div>
    </>
  );
};
