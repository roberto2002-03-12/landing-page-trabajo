import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from './';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadMessages, onSetActiveMessage, onDeleteActiveMessage, onChangePagesMessage } from '../store';
import Swal from 'sweetalert2';

export const useMessageApi = () => {
    const { salirSesion } = useAuthApi();
    const { isLoadingMessage, messages, message, paginas } = useSelector(state => state.mensaje);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const listarMensajes = async (offset) => {
        try {
            const { data } = await landingPageApi.get(`/mensajes?offset=${offset}`);
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

    const listarMensajesQuery = async (query) => {
        try {

        } catch (err) {

        }
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
        //metodos
        listarMensajes,
        activarMensaje,
        desactivarMensaje
    };
};