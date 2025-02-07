import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import ProgramaMenu from '../ProgramaMenu';  
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const Programa8 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <ProgramaMenu/>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Clase 7: Produciendo nuevas experiencias</h1>
                <div className='fechaprograma'><h3>Fecha:</h3><p>27 de marzo</p></div>
                <p>La publicidad actual va más allá de los formatos tradicionales. En este módulo, VML te mostrará cómo se producen experiencias de marca innovadoras que integran lo digital y lo físico.</p>
                <p>Exploraremos los desafíos en la producción audiovisual, herramientas que permiten crear campañas impactantes y memorables, y nuevas tecnologías que mejoran la experiencia de los consumidores. Conocerás el rol de los productores, los desarrolladores y otros profesionales clave en la creación de experiencias integrales.</p>

                <h3>Modalidad:</h3>
                <p>Teórica</p>
                <h3>Imparten:</h3>
                <div className='persona'>
                    <p><Image src="/images/personas/loreto_gonzalez.jpg" fluid /><a href="https://www.linkedin.com/in/m-loreto-gonz%C3%A1lez-guerrero-405890108/" target="_blank" rel="noopener noreferrer">Loreto González, Directora de Producción</a>.</p>
                    <p><Image src="/images/personas/andres_villanova.jpg" fluid /><a href="https://www.linkedin.com/in/andresvillanova/" target="_blank" rel="noopener noreferrer">Andrés Villanova, Director de Martech</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default Programa8;
