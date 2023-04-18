import { memo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onSetActiveClaim } from '../../../store';
import { transformDateFormat } from '../../../helpers';

export const FilaReclamo = memo(({props}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const seleccionarReclamoBtn = () => {
    dispatch(onSetActiveClaim(props));
    navigate(`/admin/reclamo/${ props.idformulario }`);
  }

  return (
    <tr>
      <td>{props.idformulario}</td>
      <td>{props.nombreCompleto}</td>
      <td>{props.tipoPersona}</td>
      <td>{props.tipoReclamo}</td>
      <td>{props.bienContratado}</td>
      <td>{props.telefono}</td>
      <td>{ transformDateFormat(props.createdAt)}</td>
      <td>
        <div className="dropdown">
          <button className="btn btn-outline-primary btn-sm dropdown-toggle" type='button' data-bs-toggle="dropdown" aria-expanded="false">
            Acciones
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className="dropdown-item link-dropdown" onClick={ seleccionarReclamoBtn }>Ver reclamo</a>
            </li>
            <li>
              <Link className="dropdown-item link-dropdown" href={`https://wa.me/51${props.telefono}`} target='_blank'>Enviar mensaje</Link>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  )
});
