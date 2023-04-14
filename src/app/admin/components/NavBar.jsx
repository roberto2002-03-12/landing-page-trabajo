import { memo } from 'react';
import { useAuthApi } from '../../../hooks'
import { Link } from 'react-router-dom';
import '../styles/NavBarStyle.css';

export const NavBar = memo(() => {
    const { salirSesion } = useAuthApi();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <p className="navbar-brand navbar-brand-lista-mensajes" href="#">Administrativo</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to='/admin/lista-mensajes' className="nav-link">Lista de mensajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/lista-reclamos' className="nav-link">Lista de reclamos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/lista-blogs' className="nav-link">Blogs publicados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/lista-categorias' className='nav-link'>Lista de categorias</Link>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <button className="btn btn-light" type="submit" onClick={() => salirSesion()}>Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </nav>
    )
});