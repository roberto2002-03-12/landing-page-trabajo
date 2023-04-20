import { Link } from 'react-router-dom';
import '../styles/LandingStyle.css';
import ScrollIntoView from 'react-scroll-into-view';

export const NavBar = ({ isScrolled }) => {
    return (//navbar navbar-landing navbar-expand-lg bg-dark fixed-top
        <nav className={`navbar navbar-landing-a navbar-expand-lg navbar-landing fixed-top`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>DYF</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <ScrollIntoView selector='#landing-section-1'>
                            <a className="nav-link nav-link-custom">¿Quienes somos?</a>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#landing-section-3'>
                            <a className="nav-link nav-link-custom">Nuestros servicios</a>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#landing-section-5'>
                            <a className="nav-link nav-link-custom">Planes</a>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#landing-section-8'>
                            <a className="nav-link nav-link-custom">Demo</a>
                        </ScrollIntoView>
                        <Link className="nav-link" to='/blog'>Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
