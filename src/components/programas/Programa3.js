import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa2 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 3: Estrategias para crear marcas conectadas</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>20 de marzo</p></div>
                <p>Las marcas que trascienden son aquellas que logran conectar culturalmente con sus audiencias. En este módulo, VML te invita a explorar el fascinante mundo del planning estratégico.</p>
                <p>Analizaremos cómo se define el posicionamiento de una marca, cómo se identifican las audiencias clave y cómo se desarrollan estrategias creativas que generen un impacto real. Descubrirás la importancia de la investigación, el análisis del consumidor y la creación de narrativas auténticas que resuenen con el público.</p>
                <h3>Modalidad:</h3>
                <p>Teórica</p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/jose_antonio_varas.jpg" fluid /><a href="https://www.linkedin.com/in/joseantoniovaras/" target="_blank" rel="noopener noreferrer">Jose Antonio Varas, Chief Strategy Officer</a>.</p>
                    <p><Image src="/images/personas/sara_grandon.jpg" fluid /><a href="https://www.linkedin.com/in/saragrandonm/" target="_blank" rel="noopener noreferrer">Sara Grandon, Directora de Planificación Estratégica</a>.</p>
                </div>            
            </Container>
        </div>
    );
};

export default Programa2;
