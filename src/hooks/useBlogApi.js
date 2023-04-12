import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from './';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadBlogs, onChangePagesBlogs, onSetActiveBlog, 
  onResetFiltersBlogs, onSetFiltersBlogs, onSetNullBlog } from '../store';
import Swal from 'sweetalert2';

export const useBlogApi = () => {
  const stateAuth = localStorage.getItem('stateAuth');
  const { salirSesion } = useAuthApi();
  const { isLoadingBlog, blogs, paginas, blog, titulo_blog, categoria_blog } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listarBlogs = async (offset) => {
    try {
      const url = `/blog?offset=${offset}`
                + (titulo_blog !== '' ? `&titulo_blog=${titulo_blog}` : '')
                + (categoria_blog !== '' ? `&categoria_blog=${categoria_blog}` : '')

      const { data } = await landingPageApi.get(url);
      dispatch(onLoadBlogs(data.blogs))
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

    listarBlogs,
    seleccionarBlog,
    borrarBlog,
    establecerFiltros,
    borrarFiltros,
    eliminarBlog
  };
};