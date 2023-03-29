import landingPageApi from '../api/landingPage';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrorMessageAuth, onCheckingAuth, 
         onLoggin, onRegister, onLogout,
        
         onSubmitEmail, onCheckingEmail, onErrorEmail, clearErrorMessageEmail} from '../store'
import Swal from 'sweetalert2';

export const useAuthApi = () => {
    const { mensajeErrorAuth, mensajeExitoAuth, estadoAuth, user,
            mensajeErrorEmail, mensajeExitoEmail, estadoEmail } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loguearse = async (formulario) => {
        dispatch(onCheckingAuth());
        let newFormulario = {
            ...formulario
        };
        newFormulario.email = newFormulario.emailLog;
        newFormulario.password = newFormulario.passwordLog;
        delete newFormulario.emailLog;
        delete newFormulario.passwordLog;
        try {
            const { data } = await landingPageApi.post('/auth/login', newFormulario);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLoggin(data.user));
            navigate('/admin/lista-mensajes');
        } catch (err) {
            dispatch(onLogout(err.response?.data?.message || '---'));
            setTimeout(() => {
                dispatch(clearErrorMessageAuth());
            }, 10);
        };
    };

    const registrarse = async (formulario) => {
        dispatch(onCheckingAuth());
        let newFormulario = {
            ...formulario
        };
        newFormulario.email = newFormulario.emailReg;
        newFormulario.password = newFormulario.passwordReg;
        delete newFormulario.emailReg;
        delete newFormulario.passwordReg;
        delete newFormulario.passwordConfirm;
        try {
            await landingPageApi.post('/auth/registrarse', newFormulario);
            dispatch(onRegister('Registrado correctamente'));
        } catch (err) {
            dispatch(onLogout(err.response?.data?.message));
            setTimeout(() => {
                dispatch(clearErrorMessageAuth());
            }, 10);
        };
    };

    const enviarEmail = async (email) => {
        dispatch(onCheckingEmail());
        try {
            await landingPageApi.post('/auth/recuperacion-contrasena', email);
            dispatch(onSubmitEmail('Se envío el código a su correo'));
        } catch (err) {
            dispatch(onErrorEmail(err.response?.data?.message || '---'));
            setTimeout(() => {
                dispatch(clearErrorMessageEmail());
            }, 10);
        };
    };

    const recuperacionCuenta = async (obj) => {
        let newObj = {
            ...obj
        }
        delete newObj.passwordConfirm;
        try {
            await landingPageApi.post('/auth/cambiar-contrasena', newObj);
            Swal.fire('Contraseña cambiada', 'su contraseña a sido cambiada, ya puede loguearse nuevamente', 'success');
            navigate('/login');
        } catch (err) {
            Swal.fire('No se pudo cambiar', err.response?.data?.message, 'error');
        };
    };

    return {
        //mensajes y datos
        mensajeErrorAuth,
        mensajeExitoAuth,
        estadoAuth,
        user,

        //email
        estadoEmail,
        mensajeErrorEmail,
        mensajeExitoEmail,

        //metodos
        loguearse,
        registrarse,
        enviarEmail,
        recuperacionCuenta
    };
};