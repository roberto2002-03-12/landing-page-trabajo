import { memo } from 'react';
import { useReclamoApi } from '../../../hooks'

export const FilaReclamo = memo(({props}) => {
  const { seleccionarReclamo } = useReclamoApi()

  const seleccionarReclamoBtn = () => {
    seleccionarReclamo(props);
  }

  return (
    <tr>
      <td>{props.idformulario}</td>
      <td>{props.nombreCompleto}</td>
      <td>{props.tipoPersona}</td>
      <td>{props.tipoReclamo}</td>
      <td>{props.bienContratado}</td>
      <td>{props.telefono}</td>
      <td>{props.createdAt}</td>
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
              <a className="dropdown-item link-dropdown" href={`https://wa.me/51${props.telefono}`} target='_blank'>Enviar mensaje</a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  )
});
