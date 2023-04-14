import { useBlogApi, useCategoriaApi } from '../../../hooks';
import { useMemo, useState } from 'react';
import { CardsBlogs } from './';
import '../style/ContainerBlogsStyle.css';
import { useDispatch } from 'react-redux';
import { onSetFiltersBlogs } from '../../../store';
import ReactPaginate from 'react-paginate';

export const ContainerBlogs = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const { listarBlogs, blogs, categoria_blog, isLoadingBlog, paginas } = useBlogApi();
    const { listarCategorias, categorias } = useCategoriaApi();

    useMemo(() => {
        listarBlogs(currentPage * 20);
    }, []);

    useMemo(() => {
        listarCategorias()
    }, [categoria_blog]);

    const onFilterBlogByCategory = (num) => {
        dispatch(onSetFiltersBlogs({categoria_blog: num}));
    };

    const cambiarPagina = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div className='container container-blog-list'>
            <div className="row">
                <div className="col-xl-3">
                    <div className='aside-blog-content'>
                        <div className="aside-blog-category">
                            <div className="blog-list-category">
                                <h5>Categorias</h5>
                                <hr />
                                <ul>
                                    {
                                        categorias.map((cat) => (
                                            <li 
                                                key={cat.idcategoria}
                                                onClick={() => {
                                                    onFilterBlogByCategory(cat.idcategoria)
                                                }}
                                            >
                                                {cat.nombre}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    {
                        blogs.map((blg) => (
                            <CardsBlogs props={blg} key={blg.idblog}/>
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
                </div>
            </div>
        </div>
    );
};
