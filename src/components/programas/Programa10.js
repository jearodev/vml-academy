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
                <h1>Programa 10: Explorando la inteligencia artificial - Fundamentos y casos de uso</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>Martes 3 de setiembre</p></div>
                <p>Este módulo ofrece la oportunidad de conocer el estado del arte en Inteligencia Artificial y la forma en que está redefiniendo las fronteras de la publicidad y el marketing.</p> 
                <p>Analizaremos cómo la IA, una vez considerada incapaz de emular la creatividad humana, ahora potencia y enriquece diversas áreas, incluidas la música y el diseño, la generación de imágenes, código y videos, la investigación de mercado y la planificación estratégica. </p>  
                <p> Una visión optimista y práctica de cómo usar IA a nuestro favor y prepararnos para liderar la transformación digital de la industria.</p>

                <h3>Modalidad:</h3>
                <p>Teórica</p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/alvaro_more.png" fluid /><a href="https://www.linkedin.com/in/alvaro-mor%C3%A9-8446075/" target="_blank" rel="noopener noreferrer">Álvaro Moré, Presidente VML</a>.</p>
                    <p><Image src="/images/personas/rodrigo_melian.png" fluid /><a href="https://www.linkedin.com/in/rodrigomelian/" target="_blank" rel="noopener noreferrer">Rodrigo Melián, VP Digital VML</a>.</p>    
                    <p><Image src="/images/personas/victor_aragon.png" fluid /><a href="https://www.linkedin.com/in/victhor-uy/" target="_blank" rel="noopener noreferrer">Víctor Aragón, Líder IA VML</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default Programa9;
