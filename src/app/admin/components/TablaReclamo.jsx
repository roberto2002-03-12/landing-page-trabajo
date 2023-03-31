import { useState, useMemo, memo } from 'react'
//ToDo import useReclamoApi
import { FilaReclamo } from './'
import { Cargando } from '../../components'
import ReactPaginate from 'react-paginate'

export const TablaReclamo = () => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre completo</th>
          <th>Tipo persona</th>
          <th>Tipo reclamo</th>
          <th>Bien contratado</th>
          <th>Nro Celular</th>
          <th>Fecha registro</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <FilaReclamo />
      </tbody>
    </table>
  )
}
