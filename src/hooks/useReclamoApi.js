import landingPageApi from "../api/landingPage";
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from './';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadClaims, onChangePagesClaims, onSetActiveClaim, onResetFiltersClaims, onSetFiltersClaims } from '../store';
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

    const seleccionarReclamo = (reclamo) => {
        dispatch(onSetActiveClaim(reclamo));
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
        borrarFiltros
    };
};