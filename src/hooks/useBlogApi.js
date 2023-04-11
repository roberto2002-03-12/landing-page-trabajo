import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from './';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadBlogs, onChangePagesBlogs, onSetActiveBlog, 
  onResetFiltersBlogs, onSetFiltersBlogs, onSetNullBlogs } from '../store';
import Swal from 'sweetalert2';

export const useBlogApi = () => {
  const { salirSesion } = useAuthApi();
  const { isLoadingBlog, blogs, paginas, blog, titulo_blog, categoria_blog } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listarBlogs = async (offset) => {
    try {
      const url = `/blog?titulo_blog=perro&categoria_blog=4`
    } catch (err) {
      if (err.response.status === 401) {
        navigate('/login');
        Swal.fire('Tiempo expirado', 'inicie nuevamente de sesión', 'error');
        salirSesion();
      }
    }
  };
};