import React from 'react'

export const FilaReclamo = () => {
  return (
    <tr>
      <td>1</td>
      <td>Emilio Roberto Fabriciano Contreras Gonzales</td>
      <td>Juridico</td>
      <td>Queja</td>
      <td>Servicio</td>
      <td>965368241</td>
      <td>2023-03-21T16:05:20.000Z</td>
      <td>
        <div className="dropdown">
          <button className="btn btn-outline-primary btn-sm dropdown-toggle" type='button' data-bs-toggle="dropdown" aria-expanded="false">
            Acciones
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a href="" className="dropdown-item link-dropdown">Ver reclamo</a>
            </li>
            <li>
              <a href="" className="dropdown-item link-dropdown">Enviar mensaje</a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  )
}
