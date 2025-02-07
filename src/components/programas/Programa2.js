import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa4 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 2: El rol estratégico de la gestión de clientes</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>20 de marzo</p></div>
                <p>En el mundo de la publicidad, la gestión de clientes es clave para el éxito. Este módulo te sumergirá en los desafíos de un área de cuentas en una agencia como VML.</p>
                <p>Exploraremos cómo se construyen y se nutren las relaciones con los clientes, cómo se gestionan las expectativas y se trabaja en equipo para alcanzar los objetivos de las marcas. Conocerás el impacto estratégico de la comunicación efectiva, la negociación y la construcción de confianza a largo plazo.</p>
                <h3>Modalidad:</h3>
                <p>Teórica y práctica</p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/oriol_albella.jpg" fluid /><a href="https://www.linkedin.com/in/ualbella/" target="_blank" rel="noopener noreferrer">Oriol Albella, Chief Operations Officer</a>.</p>
                    <p><Image src="/images/personas/javiera_vidal.jpg" fluid /><a href="https://www.linkedin.com/in/francisca-javiera-vidal-trugeda-700a1b51/" target="_blank" rel="noopener noreferrer">Francisca Vidal, Directora de Cuentas</a>.</p>
                </div>    
            </Container>
        </div>
    );
};

export default Programa4;
