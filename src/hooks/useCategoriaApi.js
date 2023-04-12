import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from "./";
import { useSelector, useDispatch } from "react-redux";
import { onLoadCategoria, onSetActiveCat, onSetNullCat, onChangePageCat } from '../store';
import Swal from "sweetalert2";

export const useCategoriaApi = () => {
  const { salirSesion } = useAuthApi();
  const { isLoadingCat, categorias , categoria, paginas } = useSelector(state => state.categoria);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listarCategorias = async (offset) => {
    try {
      const { data } = await landingPageApi.get('/categoria');
      dispatch(onLoadCategoria(data.categorias));
      dispatch(onChangePageCat(data.cantidad));
    } catch(err) {
      Swal.fire('Sucedio un error', err.response?.data?.message, 'error');
    }
  };

  const crearCategoria = async (formState) => {
    try {
      await landingPageApi.post('/categoria', formState);
      Swal.fire('Registro exitoso', 'se agregó una nueva categoría', 'success');
    } catch(err) {
      if (err.response.status === 401) {
        navigate('/login');
        Swal.fire('Tiempo expirado', 'inicie sesión nuevamente', 'error')
        salirSesion();
      }
      Swal.fire('Sucedio un error', err.response?.data?.message, 'error');
    }
  };

  const cambiarCategoria = async (formState, id) => {
    try {
      await landingPageApi.patch(`/categoria/${id}`, formState);
      Swal.fire('Actualización completa', 'se actualizo el nombre de la categoría', 'success');
    } catch(err) {
      if (err.response.status === 401) {
        navigate('/login');
        Swal.fire('Tiempo expirado', 'inicie sesión nuevamente', 'error')
        salirSesion();
      }
      Swal.fire('Sucedio un error', err.response?.data?.message, 'error');
    }
  };

  const eliminarCategoria = async (id) => {
    try {
      await landingPageApi.delete(`/categoria/${id}`);
      navigate('/admin/lista-categoria');
      Swal.fire('Eliminación completada', 'se eliminó la categoría seleccionada', 'success');
    } catch (err) {
      if (err.response.status === 401) {
        navigate('/login');
        Swal.fire('Tiempo expirado', 'inicie sesión nuevamente', 'error')
        salirSesion();
      }
      Swal.fire('Sucedio un error', err.response?.data?.message, 'error');
    }
  };

  return {
    isLoadingCat, categoria, categorias, paginas,
    listarCategorias, crearCategoria, cambiarCategoria, eliminarCategoria
  }
};