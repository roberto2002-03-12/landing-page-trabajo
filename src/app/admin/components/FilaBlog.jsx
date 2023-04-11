import { memo } from 'react';
//ToDo import blogApi

export const FilaBlog = () => {
  return (
    <tr>
      <td>1</td>
      <td>Gato esflinje</td>
      <td>Noticias</td>
      <td>2023-04-11T16:33:26.000Z</td>
      <td>
        <div className="dropdown">
          <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Acciones
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className="dropdown-item link-dropdown">Ver mensaje</a>
            </li>
            <li>
              <a className="dropdown-item link-dropdown" target='_blank'>Enviar mensaje</a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  )
}
