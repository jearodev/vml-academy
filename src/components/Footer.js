import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-center mt-5 py-4">
            <div className='redesfooter'>
                <a href="https://www.instagram.com/vml_global/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/vml/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaLinkedin size={24} />
                </a>
            </div>
            <p className='contactofooter'>Contacto - <a href="mailto:recepcion.uy@vml.com">contacto@vml.com</a></p>

            <p>&copy; 2025 VML Academy. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
