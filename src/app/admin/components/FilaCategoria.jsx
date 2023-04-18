import { memo } from 'react';
import { useCategoriaApi } from '../../../hooks';
import { transformDateFormat } from '../../../helpers';

export const FilaCategoria = memo(({props}) => {
  const { eliminarCategoria } = useCategoriaApi();

  const eliminarCategoriaBtn = () => {
    eliminarCategoria(props.idcategoria);
  };

  return (
    <tr>
      <td>{ props.idcategoria }</td>
      <td>{ props.nombre }</td>
      <td>{ transformDateFormat(props.createdAt) }</td>
      <td>
        <button className='btn btn-outline-primary btn-sm' type='button' onClick={ eliminarCategoriaBtn }>
          Eliminar
        </button>
      </td>
    </tr>
  )
});
