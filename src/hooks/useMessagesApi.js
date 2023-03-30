import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from '.';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadMessages, onSetActiveMessage, onDeleteActiveMessage } from '../store';
import Swal from 'sweetalert2';

export const useMessageApi = () => {
    const { salirSesion } = useAuthApi();
    const { isLoadingMessage, messages, message } = useSelector(state => state.mensaje);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const siguientePagina = async () => {
        const nroPagina = parseInt(localStorage.getItem('offset')) || 0;
        const pagina = nroPagina + 20;
        localStorage.setItem('offsetMessage', pagina);
    };

    const anteriorPagina = async () => {
        const nroPagina = parseInt(localStorage.getItem('offset')) || 0;
        if (nroPagina == 0) return;
         
    };

    const listarMensajes = async () => {
        try {
            const { data } = await landingPageApi.get('/mensajes');
            dispatch(onLoadMessages(data.mensajes));
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
        //metodos
        listarMensajes,
        activarMensaje,
        desactivarMensaje
    };
};