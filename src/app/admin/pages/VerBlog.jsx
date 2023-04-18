import { useMemo , useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import { useBlogApi } from '../../../hooks';
import { NavBar } from '../components';
import { Cargando } from '../../components';
import '../styles/ListaBlogStyle.css';

export const VerBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { seleccionarBlog, borrarBlog, isLoadingBlog, blog } = useBlogApi();

  const { id } = useParams();

  window.addEventListener('popstate', () => {
    borrarBlog();
  });

  useMemo(() => {
    seleccionarBlog(id);
  }, [id])

  return (
    <>
    <NavBar />
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        {
          (isLoadingBlog !== false ? (
            <Cargando />
          ) : (
            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h3 className='card-tittle text-center mb-4'>Blog</h3>
                  <div className="card-blog-img-ddd">
                    <img src={blog?.urlImagen} alt="Imagen de blog" />
                  </div>
                  <div className="card-blog-content">
                    <div className="form-group">
                      <label htmlFor="titulo">Título</label>
                      <p className='form-control'>{blog?.titulo}</p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="descripcion">Descripción</label>
                      <textarea readOnly className="form-control" value={blog?.descripcion}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="blog_completo">Blog completo</label>
                      <a className='form-control' href={blog?.urlBlog} target='_blank'>Visitar blog</a>
                    </div>
                    <div className="form-group">
                      <label htmlFor="categoria">Categoria</label>
                      <p className='form-control'>{blog?.categoria?.nombre}</p>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-block mt-4">
                    <Link style={{ color: 'white' }} to='/admin/lista-blogs'>
                      Regresar
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>  
    </div>
    </>
  )
};
