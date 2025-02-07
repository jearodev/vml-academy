import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa1 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);

    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 1: Explorando la publicidad de hoy y mañana</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>18 de marzo</p></div>
                <p>Este primer módulo ofrece una mirada profunda al fascinante mundo de la publicidad, explorando su evolución desde sus inicios hasta las tendencias que están definiendo su futuro. A través de un análisis histórico, los estudiantes comprenderán cómo la publicidad ha moldeado la cultura y la sociedad, al tiempo que ha sido influenciada por ella.</p>
                <p>Servirá como base fundamental para los demás módulos del programa, dotando a los futuros profesionales de las herramientas necesarias para desenvolverse con éxito en el dinámico mundo de la comunicación y el marketing. </p>
                <h3>Modalidad:</h3>
                <p>Teórica</p>
                <h3>Imparte:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/vicente_carrasco.jpg" fluid /><a href="https://www.linkedin.com/in/vicente-carrasco-6978131/" target="_blank" rel="noopener noreferrer">Vicente Carrasco, Chief Executive Officer</a>.</p>
                    <p><Image src="/images/personas/paloma_opaso.jpg" fluid /><a href="https://www.linkedin.com/in/paloma-opaso-unwin-209068a/" target="_blank" rel="noopener noreferrer">Paloma Opaso, Chief People Officer</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default Programa1;
