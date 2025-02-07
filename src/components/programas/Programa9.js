import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa6 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Programa 9: Publicidad 3.0. - Cómo la tecnología está cambiando el juego</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>Jueves 29 de agosto</p></div>
                <p>Hoy en día, la tecnología es una parte fundamental de nuestra vida y no podemos ignorar su impacto en el mundo de la comunicación. En este módulo hablaremos sobre cómo aplicamos nuevas tecnologías tanto en los procesos de trabajo como en la producción de los proyectos.</p>
                <p>Desde herramientas colaborativas online hasta inteligencia artificial, pasando por realidad aumentada, “Virtual Production” y “Automation”, todas tecnologías que están transformando continuamente la forma en que trabajamos y creamos.</p>
                <h3>Modalidad:</h3>
                <p>Teórica</p>
                <h3>Imparte:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/santiago_marenghi.png" fluid /><a href="https://www.linkedin.com/in/smarenghi/" target="_blank" rel="noopener noreferrer">Santiago Marenghi, Studio Creative Director HOGARTH</a>.</p>
                    <p><Image src="/images/personas/rafael_almeida.png" fluid /><a href="https://uy.linkedin.com/in/rafael-de-almeida-496437b9" target="_blank" rel="noopener noreferrer">Rafael de Almeida, Producer HOGARTH</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default Programa6;
