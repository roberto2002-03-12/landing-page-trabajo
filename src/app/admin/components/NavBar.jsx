import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <p className="navbar-brand" href="#">Administrativo</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link">Lista de mensajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Lista de reclamos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Blogs publicados</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};