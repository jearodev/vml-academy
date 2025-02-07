import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa9 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 8: Creando marcas que generan valor</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>1 de abril</p></div>
                <p>Las marcas más exitosas son aquellas que tienen un propósito claro y generan valor para sus audiencias.</p>
                <p>En este módulo, VML te invitará a explorar el mundo de la consultoría de marca. Analizaremos cómo se construyen marcas sólidas y relevantes a partir del análisis de su salud, su posicionamiento y su propuesta de valor. Descubrirás cómo se evalúan los atributos de marca, cómo se gestiona su reputación y cómo se desarrollan estrategias de comunicación que fortalezcan su imagen a largo plazo.</p>

                <h3>Modalidad:</h3>
                <p>Teórica y práctica</p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/patricia_varela.png" fluid /><a href="https://www.linkedin.com/in/constanzaquezada/" target="_blank" rel="noopener noreferrer">Constanza Quezada, Directora de Consultoría</a>.</p>
                    <p><Image src="/images/personas/hugo_hernandez.png" fluid /><a href="https://www.linkedin.com/in/ricardojavierlopezmo/" target="_blank" rel="noopener noreferrer">Ricardo López, Director de BAV</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default Programa9;
