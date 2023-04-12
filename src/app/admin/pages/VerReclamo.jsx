import { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useReclamoApi } from '../../../hooks';
import { Cargando } from '../../components';
import { NavBar } from '../components';

export const VerReclamo = () => {
  const { seleccionarReclamo, borrarReclamo, isLoadingClaim, claim } = useReclamoApi();

  const { id } = useParams();

  window.addEventListener('popstate', () => {
    borrarReclamo()
  });

  useMemo(() => {
    seleccionarReclamo(id);
  }, [id]);

  return (
    <>
    <NavBar />
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        {
          (isLoadingClaim !== false ? (
            <Cargando /> 
          ) : (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Información de Usuario</h3>
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <p type="text" readOnly className="form-control">{ claim?.nombreCompleto }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tipo de persona</label>
                    <p type="text" readOnly className="form-control">{ claim?.tipoPersona }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Razón social</label>
                    <p type="text" readOnly className="form-control">{ claim?.razonSocial }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Domicilio</label>
                    <p type="text" readOnly className="form-control">{ claim?.domicilio }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Departamento</label>
                    <p type="text" readOnly className="form-control">{ claim?.departamento }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Provincia</label>
                    <p type="text" readOnly className="form-control">{ claim?.provincia }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Distrito</label>
                    <p type="text" readOnly className="form-control">{ claim?.distrito }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tipo de identidad</label>
                    <p type="text" readOnly className="form-control">{ claim?.docIdentidad }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">N° Identidad</label>
                    <p type="text" readOnly className="form-control">{ claim?.nroDocumento }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">N° Télefono</label>
                    <p type="text" readOnly className="form-control">{ claim?.telefono }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <p type="text" readOnly className="form-control">{ claim?.email }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tipo reclamo</label>
                    <p type="text" readOnly className="form-control">{ claim?.tipoReclamo }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Bien contratado</label>
                    <p type="text" readOnly className="form-control">{ claim?.bienContratado }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Documento</label>
                    <a className='form-control' href={ claim?.documentoLink }>Descargar</a>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Detalle del producto</label>
                    <textarea readOnly className="form-control" value={ claim?.detalleDelProducto }/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Detalle del reclamo</label>
                    <textarea readOnly className="form-control" value={ claim?.detalleDelReclamo }/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Autoriza acto</label>
                    <p type="text" readOnly className="form-control">{ (claim?.autorizoActo == false ? 'No autorizo' : 'Sí autorizo') }</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Fecha de envio</label>
                    <p type="text" readOnly className="form-control">{ claim?.createdAt }</p>
                  </div>
                  <button className="btn btn-primary btn-block mt-4">
                    <Link style={{ color: 'white' }} to='/admin/lista-reclamos'>
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
}
