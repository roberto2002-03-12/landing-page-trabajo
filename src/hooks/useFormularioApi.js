import landingPageApi from '../api/landingPage';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onSubmit, onError, clearErrorMessage, onChecking } from '../store';

export const useFormularioApi = () => {
    const { mensajeError, mensajeExito, estado } = useSelector(state => state.estado);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const subirFormularioReclamo = async (formulario, documento, tokenCaptcha) => {
        dispatch(onChecking());
        let newFormulario = {
            ...formulario
        };
        const departamento = newFormulario.departamento.split('-');
        const provincia = newFormulario.provincia.split('-');

        try {
            const formData = new FormData();
            formData.append('nombreCompleto', newFormulario.nombreCompleto);
            formData.append('tipoPersona', newFormulario.tipoPersona);
            formData.append('razonSocial', newFormulario.razonSocial);
            formData.append('domicilio', newFormulario.domicilio);
            formData.append('departamento', departamento[1]);
            formData.append('provincia', provincia[1]);
            formData.append('distrito', newFormulario.distrito);
            formData.append('docIdentidad', newFormulario.docIdentidad);
            formData.append('nroDocumento', newFormulario.nroDocumento);
            formData.append('telefono', newFormulario.telefono);
            formData.append('email', newFormulario.email);
            formData.append('tipoReclamo', newFormulario.tipoReclamo);
            formData.append('bienContratado', newFormulario.bienContratado);
            formData.append('archivo_pdf', documento);
            formData.append('detalleDelProducto', newFormulario.detalleDelProducto);
            formData.append('detalleDelReclamo', newFormulario.detalleDelReclamo);
            formData.append('autorizoActo', newFormulario.autorizoActo);
            formData.append('captchaToken', tokenCaptcha);

            await landingPageApi.post('/formulario-reclamo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            dispatch(onSubmit('Formulario súbido exitosamente'));
            navigate('/');
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        } catch (err) {
            dispatch(onError('Error en subir el formulario, intente de nuevo'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        };
    };

    const subirMensaje = async (mensaje, tokenCaptcha) => {
        dispatch(onChecking());
        const newMessage = {
            ...mensaje,
            captchaToken: tokenCaptcha
        }
        try {
            await landingPageApi.post('/mensajes', newMessage);
            dispatch(onSubmit('Se ha enviado el mensaje'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        } catch (err) {
            dispatch(onError('Hubo un error al enviar el mensaje'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        };
    };

    return {
        //mensajes
        estado,
        mensajeError,
        mensajeExito,
        //metodos
        subirFormularioReclamo,
        subirMensaje
    }
};