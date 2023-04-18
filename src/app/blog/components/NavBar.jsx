import { Link } from 'react-router-dom';

export const NavBar = ({ isScrolled }) => {
  return (
    <nav className={`navbar navbar-landing-a navbar-expand-lg ${isScrolled ? 'navbar-landing': ''} fixed-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>DYF</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link className="nav-link" to='/'>Regresar a inicio</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}