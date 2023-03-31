import { useState, useMemo, memo } from 'react';
import { useMessageApi } from '../../../hooks';
import { FilaMensaje, ModalMensaje } from './';
import { Cargando } from '../../components'
import ReactPaginate from 'react-paginate';

export const TablaMensaje = memo(() => {
    const [currentPage, setCurrentPage] = useState(0);
    const { listarMensajes, messages, paginas, isLoadingMessage, fecha_creada, nombre_completo } = useMessageApi();

    const cambiarPagina = (selectedPage) => {
        setCurrentPage(selectedPage.selected)
    }
    //que solo mande a solicitar datos cuando la página cambie
    useMemo(() => {
        listarMensajes(currentPage * 20);
    }, [currentPage, fecha_creada, nombre_completo]);

    return (
        <>
        {
            (isLoadingMessage === true ? (
                <Cargando />
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nombre cliente</th>
                        <th scope='col'>Nro Celular</th>
                        <th scope='col'>Fecha registro</th>
                        <th scope='col'>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        messages.map((msg) => (
                            <FilaMensaje props={ msg } key={msg.idmensaje}/>
                        ))
                    }
                    </tbody>
                </table>
            ))
        }
        <ModalMensaje />
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
