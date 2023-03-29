import { useState, useEffect } from 'react';
import { useAuthApi } from '../../hooks';
import { EnviarEmail, CambiarContrasena } from '../components';
import '../styles/CambiarContrasenaStyle.css';

export const RecuperarContrasena = () => {
    const { estadoEmail } = useAuthApi();
    const [enviarEmail, setEnviarEmail] = useState(false);

    useEffect(() => {
        if (estadoEmail === 'enviado') {
            setEnviarEmail(true);
        }
    }, [estadoEmail]);

    return (
        <div className="container-recuperacion">
            {
                (enviarEmail === true ? <CambiarContrasena/> : <EnviarEmail/>)
            }
        </div>
    )
}
