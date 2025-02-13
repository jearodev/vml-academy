import React, { useState } from 'react';
import { Container, Image} from 'react-bootstrap';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


const Terminos = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);

    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>
            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Términos y condiciones</h1>
                <p>Al participar se acepta que todo el contenido presentado en VML Academy es confidencial y de propiedad exclusiva de VML. Cualquier idea o trabajo creativo que surja durante las clases o prácticas es propiedad intelectual de la agencia. Al inscribirse los participantes aceptan estos términos y condiciones y no podrán utilizar el contenido sin autorización escrita de VML.</p>
                <p>Al momento de aplicar y hasta culminar el 1 de abril, el programa no se podrá estar trabajando en ninguna agencia de marketing y/o publicidad. Si surge una oportunidad laboral durante el programa, se deberá avisar a VML.</p>
                <p>Las condiciones de la práctica serán coordinadas al culminar el programa para poder personalizarla a medida de los estudiantes seleccionados.</p>    
            </Container>
        </div>
    );
};

export default Terminos;
