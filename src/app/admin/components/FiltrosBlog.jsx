import { useForm } from '../../../hooks'
import { TextField, Button } from '@mui/material';

const inputs = {
  titulo_blog: '',
  categoria_blog: ''
};

const style = {
  marginLeft: '15px',
  marginRight: '15px'
};

export const FiltrosBlog = () => {
  const { titulo_blog, categoria_blog, onInputChange, formState, onResetForm } = useForm(inputs);

  const onSearchBlog = (event) => {
    event.preventDefault();

    if (!titulo_blog && !categoria_blog) return;

    console.log(formState);
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
          <TextField
            variant='outlined'
            label='Categoria'
            focused
            size='small'
            sx={style}
            onChange={ onInputChange }
            name='categoria_blog'
            value={ categoria_blog }
          />
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
            }}
          >
            Restablecer
          </Button>
        </form>
      </div>
    </>
  );
};
