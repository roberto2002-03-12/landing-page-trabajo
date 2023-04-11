import React from 'react';
//ToDo import MessageApi
import { FilaBlog } from './';
import { Cargando } from '../../components';
import ReactPaginate from 'react-paginate';

export const TablaBlog = () => {
  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Fecha creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <FilaBlog />
        </tbody>
      </table>
    </>
  )
}
