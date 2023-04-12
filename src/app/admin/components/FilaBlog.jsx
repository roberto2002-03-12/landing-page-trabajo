import { memo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onSetActiveBlog } from '../../../store';

export const FilaBlog = memo(({props}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const seleccionarBlogBtn = () => {
    dispatch(onSetActiveBlog(props));
    navigate(`/admin/blog/${props.idblog}`);
  };

  const eliminarBlogBtn = () => {
    
  }

  return (
    <tr>
      <td>{props.idblog}</td>
      <td>{props.titulo}</td>
      <td>{props.categoria.nombre}</td>
      <td>{props.createdAt}</td>
      <td>
        <div className="dropdown">
          <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Acciones
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className="dropdown-item link-dropdown" onClick={ seleccionarBlogBtn } >Ver blog</a>
            </li>
            <li>
              <a className='dropdown-item link-dropdown'>Editar</a>
            </li>
            <li>
              <a className='dropdown-item link-dropdown' onClick={ eliminarBlogBtn }>Eliminar</a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  )
});
