import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa7 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 6: Social media en un mundo más digital</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>27 de marzo</p></div>
                <p>El social media se ha convertido en un escenario fundamental para las marcas que buscan conectar con sus audiencias.</p>
                <p>En este módulo, VML te invitará a explorar las últimas tendencias en social media marketing. Analizaremos cómo se planifican y se ejecutan estrategias de contenidos efectivas en diferentes plataformas, cómo se crea contenido relevante y cómo se mide el impacto de las acciones. Descubrirás cómo el social listening, el community management y la publicidad en redes sociales se combinan para construir comunidades y generar engagement.</p>

                <h3>Modalidad:</h3>
                <p>Teórica y práctica</p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/andres_fritz.jpg" fluid /><a href="https://www.linkedin.com/in/andresfritz/" target="_blank" rel="noopener noreferrer">Andrés Fritz, Director de Contenidos</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default Programa7;
