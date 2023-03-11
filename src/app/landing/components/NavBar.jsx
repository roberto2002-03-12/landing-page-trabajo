import '../styles/LandingStyle.css';

export const NavBar = ({ isScrolled }) => {
    return (//navbar navbar-landing navbar-expand-lg bg-dark fixed-top
        <nav className={`navbar navbar-landing-a navbar-expand-lg ${isScrolled ? 'navbar-landing': ''} fixed-top`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">DYF</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link" href="#">¿Quienes somos?</a>
                        <a className="nav-link" href="#">Nuestros servicios</a>
                        <a className="nav-link" href="#">Planes</a>
                        <a className="nav-link" href="#">Demo</a>
                        <a className="nav-link" href="#">Blog</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
