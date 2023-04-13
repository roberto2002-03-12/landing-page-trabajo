import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from './';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadBlogs, onChangePagesBlogs, onSetActiveBlog, 
  onResetFiltersBlogs, onSetFiltersBlogs, onSetNullBlog, 
  onCheckingBlog, onSubmitBlog, onErrorBlog, clearErrorBlogMessage } from '../store';
import Swal from 'sweetalert2';

export const useBlogApi = () => {
  const stateAuth = localStorage.getItem('stateAuth');
  const { salirSesion } = useAuthApi();
  const { isLoadingBlog, blogs, paginas, blog, titulo_blog, categoria_blog,
          statusSubmitBlog, mensajeErrorBlog, mensajeExitoBlog } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subirBlog = async (formState, image) => {
    dispatch(onCheckingBlog());
    let newFormState = { ...formState }
    try {
      const formData = new FormData();
      formData.append('titulo', newFormState.titulo);
      formData.append('descripcion', newFormState.descripcion);
      formData.append('foto_blog', image);
      formData.append('urlBlog', newFormState.urlBlog);
      formData.append('categoriaId', newFormState.categoriaId);

      await landingPageApi.post('/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    });

      dispatch(onSubmitBlog('Blog publicado exitosamente'));
      navigate('/admin/lista-blogs');
      setTimeout(() => {
        dispatch(clearErrorBlogMessage());
      }, 10);
    } catch (err) {
      if (err.response.status === 401) {
        navigate('/login');
        dispatch(onErrorBlog('Tiempo expirado'));
        setTimeout(() => {
          dispatch(clearErrorBlogMessage());
          salirSesion();
        }, 10);
      } else {
        dispatch(onErrorBlog(err.response?.data?.message || 'Error en publicar el blog, contacte con el admin o espere un tiempo e intente de nuevo'));
        setTimeout(() => {
          dispatch(clearErrorBlogMessage());
        }, 10);
      }
    };
  };

  const listarBlogs = async (offset) => {
    try {
      const url = `/blog?offset=${offset}`
                + (titulo_blog !== '' ? `&titulo_blog=${titulo_blog}` : '')
                + (categoria_blog !== '' ? `&categoria_blog=${categoria_blog}` : '')

      const { data } = await landingPageApi.get(url);
      dispatch(onLoadBlogs(data.blogs));
      dispatch(onChangePagesBlogs(data.cantidad));
    } catch (err) {
      navigate('/');
      Swal.fire('Sucedio un error', 'por favor notifique el error', 'error');
    }
  };

  const seleccionarBlog = async (id) => {
    try {
      if (blog === null) {
        const url = `/blog/${id}`;
        const { data } = await landingPageApi.get(url);
        dispatch(onSetActiveBlog(data));
      }
    } catch (err) {
      if (err.response.status === 404 && stateAuth == 'authenticated') {
        navigate('/admin/lista-blogs');
        Swal.fire('No se encontro', err.response?.data?.message, 'error')
      } else if (err.response.status === 404) { 
        navigate('/blog');
        Swal.fire('No se encontro', err.response?.data?.message, 'error')
      } else {
        navigate('/blog');
        Swal.fire('Sucedio un error en el sistema', err.response?.data?.message, 'error');
      }
    }
  };

  const eliminarBlog = async (id) => {
    try {
      const url = `/blog/${id}`;
      await landingPageApi.delete(url);
      listarBlogs(0);
      Swal.fire('Blog eliminado', 'se eliminó correctamente el blog', 'success');
    } catch (err) {
      if (err.response.status === 401) {
        navigate('/login');
        Swal.fire('Tiempo expirado', 'inicie sesión nuevamente', 'error')
        salirSesion();
      } else {
        navigate('/admin/lista-blogs');
        Swal.fire('No se encontro', err.response?.data?.message, 'error');
      }
    }
  };

  const borrarBlog = () => {
    dispatch(onSetNullBlog());
  };

  const establecerFiltros = (form) => {
    dispatch(onSetFiltersBlogs(form));
  };

  const borrarFiltros = () => {
    dispatch(onResetFiltersBlogs());
  };

  return {
    isLoadingBlog,
    paginas,
    blog,
    blogs,
    titulo_blog,
    categoria_blog,
    statusSubmitBlog,
    mensajeErrorBlog,
    mensajeExitoBlog,

    listarBlogs,
    seleccionarBlog,
    borrarBlog,
    establecerFiltros,
    borrarFiltros,
    eliminarBlog,
    subirBlog
  };
};