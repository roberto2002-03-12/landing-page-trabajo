import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from './';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadMessages, onSetActiveMessage, onDeleteActiveMessage, onChangePagesMessage, onSetFiltersMessage, onResetFiltersMessage } from '../store';
import Swal from 'sweetalert2';

export const useMessageApi = () => {
    const { salirSesion } = useAuthApi();
    const { isLoadingMessage, messages, message, paginas, nombre_completo, fecha_creada } = useSelector(state => state.mensaje);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const listarMensajes = async (offset) => {
        try {
            /*
            if (nombre_completo == '' && fecha_creada == '') {
                const { data } = await landingPageApi.get(`/mensajes?offset=${offset}`);
                dispatch(onLoadMessages(data.mensajes));
                dispatch(onChangePagesMessage(data.cantidad));
            } else if (nombre_completo !== '' && fecha_creada == '') {
                const { data } = await landingPageApi.get(`/mensajes?offset=${offset}&nombre_completo=${nombre_completo}`);
                dispatch(onLoadMessages(data.mensajes));
                dispatch(onChangePagesMessage(data.cantidad));
            } else if (nombre_completo == '' && fecha_creada !== '') {
                const { data } = await landingPageApi.get(`/mensajes?offset=${offset}&fecha_creada=${fecha_creada}`);
                dispatch(onLoadMessages(data.mensajes));
                dispatch(onChangePagesMessage(data.cantidad));
            } else if (nombre_completo !== '' && fecha_creada !== '') {
                const { data } = await landingPageApi.get(`/mensajes?offset=${offset}&nombre_completo=${nombre_completo}&fecha_creada=${fecha_creada}`);
                dispatch(onLoadMessages(data.mensajes));
                dispatch(onChangePagesMessage(data.cantidad));
            }
            */
            const url = `/mensajes?offset=${offset}` + (nombre_completo !== '' ? `&nombre_completo=${nombre_completo}` : '') + (fecha_creada !== '' ? `&fecha_creada=${fecha_creada}` : '')
            const { data } = await landingPageApi.get(url);
            dispatch(onLoadMessages(data.mensajes));
            dispatch(onChangePagesMessage(data.cantidad));
        } catch (err) {
            if (err.response.status === 401) {
                navigate('/login');
                Swal.fire('Tiempo expirado', 'inicie sesión nuevamente', 'error')
                salirSesion();
            }
        }
    };

    const establecerFiltros = (formState) => {
        dispatch(onSetFiltersMessage(formState));
    };

    const borrarFiltros = () => {
        dispatch(onResetFiltersMessage());
    };

    const activarMensaje = (mensaje) => {
        dispatch(onSetActiveMessage(mensaje));
    };

    const desactivarMensaje = () => {
        dispatch(onDeleteActiveMessage());
    } 

    return {
        //propiedades
        messages,
        message,
        paginas,
        isLoadingMessage,
        nombre_completo,
        fecha_creada,
        //metodos
        listarMensajes,
        activarMensaje,
        desactivarMensaje,
        establecerFiltros,
        borrarFiltros
    };
};