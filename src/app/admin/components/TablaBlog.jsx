import React, { useState, useMemo, memo } from 'react';
import { useBlogApi } from '../../../hooks';
import { FilaBlog } from './';
import { Cargando } from '../../components';
import ReactPaginate from 'react-paginate';

export const TablaBlog = memo(() => {
  const [currentPage, setCurrentPage] = useState(0);
  const { blogs, paginas, titulo_blog, categoria_blog, listarBlogs, isLoadingBlog } = useBlogApi();
  
  const cambiarPagina = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useMemo(() => {
    listarBlogs(currentPage * 20);
  }, [currentPage, titulo_blog, categoria_blog]);

  return (
    <>
      {
        (isLoadingBlog === true ? (
          <Cargando />
        ) : (
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
              {
                blogs.map((blg) => (
                  <FilaBlog props={blg} key={blg.idblog}/>
                ))
              }
            </tbody>
          </table>
        ))
      }
      <ReactPaginate
        pageCount={ paginas }
        onPageChange={ cambiarPagina }
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
