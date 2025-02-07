import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import '../css/NavBar.css';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleReload = (event) => {
        event.preventDefault();
        window.location.href = '/';
    };

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const closeNavbar = () => {
        setExpanded(false);
    };

    return (
        <Navbar expand="lg" expanded={expanded} className="custom-navbar">
            <Navbar.Brand href="#">
                <Link onClick={handleReload} to="/"><img src="/images/vml-academy.png" alt="Logo" style={{ height: '40px' }} /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} className={expanded ? 'is-open' : ''}>
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="nav-link" onClick={(e) => { handleReload(e); closeNavbar(); }} to="/">Inicio</Link>
                    <Link className="nav-link" smooth to="/#acercade" onClick={closeNavbar}>Acerca de</Link>
                    <Link className="nav-link" smooth to="/#programas" onClick={closeNavbar}>Programa</Link>
                    <Link className="nav-link" smooth to="/#aplicar" onClick={closeNavbar}>Postular</Link>
                    <Link className="nav-link" smooth to="/cronograma" onClick={closeNavbar}>Cronograma</Link>
                    <Link className="nav-link" smooth to="/terminos" onClick={closeNavbar}>Términos y condiciones</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
