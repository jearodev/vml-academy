import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa3 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 4: El poder de las ideas y la creatividad</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>25 de marzo</p></div>
                <p>Detrás de cada campaña publicitaria exitosa hay un proceso creativo sólido. VML te abre las puertas a su departamento creativo para que conozcas cómo se gestan las grandes ideas.</p>
                <p>Exploraremos las diferentes etapas del proceso creativo, la conceptualización, y cómo se trabaja en equipo para encontrar soluciones innovadoras a los desafíos de las marcas. Descubrirás de mano de casos reales cómo la inspiración, la curiosidad y el pensamiento lateral se combinan para dar vida a marcas conectadas y a ideas que capturan la atención y generan resultados.</p>
                <h3>Modalidad:</h3>
                <p>Teórica</p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/raimundo_undurraga.jpg" fluid /><a href="https://www.linkedin.com/in/raimundo-undurraga/" target="_blank" rel="noopener noreferrer">Raimundo Undurraga, Chief Creative Officer</a>.</p>
                </div>    
            </Container>
        </div>
    );
};

export default Programa3;
