import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa5 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 5: Hacer que las lindas ideas sean ideas lindas</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>25 de marzo</p></div>
                <p>Una idea brillante necesita una ejecución impecable para alcanzar su máximo potencial.</p>
                <p>En este módulo, VML te sumergirá en el mundo de la dirección de arte. Exploraremos cómo se traduce un concepto creativo en piezas publicitarias impactantes, desde estéticas, los formatos y las técnicas más adecuadas para cada proyecto. Conocerás el rol del director de arte y otros profesionales clave en la creación de piezas memorables.</p>
                <h3>Modalidad:</h3>
                <p>Teórica y práctica. </p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/jaime_cano.jpg" fluid /><a href="https://www.linkedin.com/in/jaime-cano-41497688/" target="_blank" rel="noopener noreferrer">Jaime Cano, Director Creativo</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default Programa5;
