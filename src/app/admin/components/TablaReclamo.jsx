import { useState, useMemo, memo } from 'react'
import { useReclamoApi } from '../../../hooks'
import { FilaReclamo } from './'
import { Cargando } from '../../components'
import ReactPaginate from 'react-paginate'

export const TablaReclamo = memo(() => {
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoadingClaim, paginas, claim, claims, nombre_completo,
          fecha_creada, tipo_persona, tipo_reclamo, tipo_contratado,
          
          listarReclamos } = useReclamoApi();

  const cambiarPagina = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useMemo(() => {
    listarReclamos(currentPage * 20);
  }, [currentPage, nombre_completo, fecha_creada, tipo_persona, tipo_reclamo, tipo_contratado]);

  return (
    <>
    {
      (
        isLoadingClaim === true ? (
          <Cargando />
        ) : (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nombre completo</th>
                <th scope='col'>Tipo persona</th>
                <th scope='col'>Tipo reclamo</th>
                <th scope='col'>Bien contratado</th>
                <th scope='col'>Nro Celular</th>
                <th scope='col'>Fecha registro</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                claims.map((cla) => (
                  <FilaReclamo props={cla} key={cla.idformulario}/>
                ))
              }
            </tbody>
          </table>
        )
      )
    }
    <ReactPaginate
      pageCount={ paginas }
      onPageChange={cambiarPagina}
      containerClassName={'pagination'}
      activeClassName={'active'}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      pageRangeDisplayed={5}
      renderOnZeroPageCount={null}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
    />
    </>
  )
});
