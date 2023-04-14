import { memo } from 'react';
import { useCategoriaApi } from '../../../hooks';

export const FilaCategoria = memo(({props}) => {
  const { eliminarCategoria } = useCategoriaApi();

  const eliminarCategoriaBtn = () => {
    eliminarCategoria(props.idcategoria);
  };

  return (
    <tr>
      <td>{ props.idcategoria }</td>
      <td>{ props.nombre }</td>
      <td>{ props.createdAt }</td>
      <td>
        <button className='btn btn-outline-primary btn-sm' type='button' onClick={ eliminarCategoriaBtn }>
          Eliminar
        </button>
      </td>
    </tr>
  )
});
