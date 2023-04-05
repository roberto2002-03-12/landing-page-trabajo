import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from './';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadClaims, onChangePagesClaims, onSetActiveClaim, 
         onResetFiltersClaims, onSetFiltersClaims, onSetNullClaim } from '../store';
import Swal from "sweetalert2";

export const useReclamoApi = () => {
    const { salirSesion } = useAuthApi();
    const { isLoadingClaim, paginas, claim, claims,
            nombre_completo, fecha_creada, 
            tipo_persona, tipo_reclamo, tipo_contratado
          } = useSelector(state => state.reclamo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const listarReclamos = async (offset) => {
        try {
            const url = `/formulario-reclamo?offset=${offset}`
                        + (nombre_completo !== '' ? `&nombre_completo=${nombre_completo}` : '')
                        + (fecha_creada !== '' ? `&fecha_creada=${fecha_creada}` : '')
                        + (tipo_contratado !== '' ? `&tipo_contratado=${tipo_contratado}` : '')
                        + (tipo_reclamo !== '' ? `&tipo_reclamo=${tipo_reclamo}` : '')
                        + (tipo_persona !== '' ? `&tipo_persona=${tipo_persona}` : '');

            const { data } = await landingPageApi.get(url);
            dispatch(onLoadClaims(data.formularios));
            dispatch(onChangePagesClaims(data.cantidad));
        } catch(err) {
            if (err.response.status === 401) {
                navigate('/login');
                Swal.fire('Tiempo expirado', 'inicie sesión nuevamente', 'error')
                salirSesion();
            }
        }
    };

    const seleccionarReclamo = async ( id) => {
        try {
            if (claim === null) {
                const url = `/formulario-reclamo/${id}`;
                const { data } = await landingPageApi.get(url);
                console.log('no deberia pasar por acá.')
                dispatch(onSetActiveClaim(data));
            }
        } catch (err) {
            if (err.response.status === 401) {
                navigate('/login');
                Swal.fire('Tiempo expirado', 'inicie sesión nuevamente', 'error')
                salirSesion();
            } else if (err.response.status === 404) {
                navigate('/admin/lista-reclamos');
                Swal.fire('No se encontro', err.response?.data?.message, 'error');
            } else {
                navigate('/admin/lista-reclamos');
                Swal.fire('Hubo un error en el sistema', 'Sucedio un error, hablar con el admin', 'error');
            }
        }
    };

    const borrarReclamo = () => {
        dispatch(onSetNullClaim());
    };

    const establecerFiltros = (form) => {
        dispatch(onSetFiltersClaims(form));
    };

    const borrarFiltros = () => {
        dispatch(onResetFiltersClaims());
    };

    return {
        //propiedades
        isLoadingClaim,
        paginas,
        claim,
        nombre_completo,
        fecha_creada,
        tipo_persona,
        tipo_reclamo,
        tipo_contratado,
        claims,
        //metodos
        listarReclamos,
        seleccionarReclamo,
        establecerFiltros,
        borrarFiltros,
        borrarReclamo
    };
};