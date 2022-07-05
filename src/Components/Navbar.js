import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import "../styles/Custom.css"

function Navbar() {
    const _url = useLocation();
    let _route = _url.pathname;
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="/">
                            <img className="img rounded" height="54" width="74" src="./img/alconvias-logo-new.jpeg" alt="."/>
                            <span>Alconvias S.R.L</span>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item p-3">
                                    {_route === '/' ?
                                        <Link className="nav-link
                                        text-center
                                        bg-wine
                                        text-light
                                        rounded
                                        border-top
                                        border-bottom
                                        border-dark"
                                            to="/">
                                            <i className="fa fa-home text-danger"></i> Inicio
                                        </Link>
                                        :
                                        <Link className="nav-link
                                        text-center
                                        bg-light"
                                            to="/">
                                            <i className="fa fa-home text-danger"></i> Inicio
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item p-3">
                                    {_route === '/services' ?
                                        <Link className="nav-link
                                        text-center
                                        bg-wine
                                        text-light
                                        rounded
                                        border-top
                                        border-bottom
                                        border-dark"
                                            to="/services">
                                            <i className="fa-solid fa-person-digging text-warning"></i> Servicios
                                        </Link>
                                        :
                                        <Link className="nav-link
                                        text-center
                                        bg-light"
                                            to="/services">
                                            <i className="fa-solid fa-person-digging text-warning"></i> Servicios
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item p-3">
                                {_route === '/products' ?
                                        <Link className="nav-link
                                        text-center
                                        bg-wine
                                        text-light
                                        rounded
                                        border-top
                                        border-bottom
                                        border-dark"
                                            to="/products">
                                            <i className="fa fa-toolbox text-success"></i> Productos
                                        </Link>
                                        :
                                        <Link className="nav-link
                                        text-center
                                        bg-light"
                                            to="/products">
                                            <i className="fa fa-toolbox text-success"></i> Productos
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item p-3">
                                {_route === '/jobs' ?
                                        <Link className="nav-link
                                        text-center
                                        bg-wine
                                        text-light
                                        rounded
                                        border-top
                                        border-bottom
                                        border-dark"
                                            to="/jobs">
                                            <i className="fas fa-hard-hat text-warning"></i> Nuestras Obras
                                        </Link>
                                        :
                                        <Link className="nav-link
                                        text-center
                                        bg-light"
                                            to="/jobs">
                                            <i className="fas fa-hard-hat text-warning"></i> Nuestras Obras
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item p-3">
                                {_route === '/gallery' ?
                                        <Link className="nav-link
                                        text-center
                                        bg-wine
                                        text-light
                                        rounded
                                        border-top
                                        border-bottom
                                        border-dark"
                                            to="/gallery">
                                            <i className="far fa-images text-info"></i> Galeria de Obras
                                        </Link>
                                        :
                                        <Link className="nav-link
                                        text-center
                                        bg-light"
                                            to="/gallery">
                                            <i className="far fa-images text-info"></i> Galeria de Obras
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item p-3">
                                {_route === '/contact' ?
                                        <Link className="nav-link
                                        text-center
                                        bg-wine
                                        text-light
                                        rounded
                                        border-top
                                        border-bottom
                                        border-dark"
                                            to="/contact">
                                            <i className="fa-solid fa-headset text-primary ml-4"></i> Contactárnos
                                        </Link>
                                        :
                                        <Link className="nav-link
                                        text-center
                                        bg-light"
                                            to="/contact">
                                            <i className="fa-solid fa-headset text-primary ml-4"></i> Contactárnos
                                        </Link>
                                    }
                                </li>
                            </ul>
                            <hr className="my-2" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar