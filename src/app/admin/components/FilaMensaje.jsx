import { memo } from 'react';
import { useMessageApi } from '../../../hooks';

export const FilaMensaje = memo(({props}) => {
    const { activarMensaje } = useMessageApi();

    const onActivarMensaje = () => {
        activarMensaje(props);
    };

    return (
        <tr>
            <td>{ props.idmensaje }</td>
            <td>{ props.nombreCompleto.length > 30 ? `${props.nombreCompleto.slice(0, 30)}...` : props.nombreCompleto }</td>
            <td>{ props.numeroCelular }</td>
            <td>{ props.createdAt }</td>
            <td>
                <div className="dropdown">
                    <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Acciones
                    </button>
                    <ul className='dropdown-menu'>
                        <li>
                            <a className="dropdown-item link-dropdown" onClick={ onActivarMensaje }>Ver mensaje</a>
                            </li>
                            <li>
                            <a className="dropdown-item link-dropdown" href={`https://wa.me/51${props.numeroCelular}`} target='_blank'>Enviar mensaje</a>
                        </li>
                    </ul>
                </div>
            </td>
        </tr>
    )
});
