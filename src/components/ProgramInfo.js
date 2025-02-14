import React, { useState, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useTypingEffect from '../hooks/useTypingEffect';

const ProgramInfo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);
    const typingText = useTypingEffect("Bienvenidos a VML Academy", 20);
    const textRef = useRef(null);

    return (
        <div>
            <div id="acercade" ref={ref} className={`opacitycontainer container -mt-3 ${isVisible ? 'fade-in' : ''}`}>
                <h1 className="typing-text" ref={textRef}>{typingText}</h1>
                <h2 className="responsive-font mb-4">Nuestro Programa de formación para estudiantes universitarios</h2>
                <p>Como parte de nuestra cultura nos encanta compartir conocimiento, por eso lanzamos este programa que permite aprender con los mejores profesionales de la industria y compartir experiencias con otros estudiantes apasionados por la publicidad y el marketing.</p>
                <p>El programa, dirigido a estudiantes de las carreras afines al marketing y las comunicaciones, se desarrollará en 8 clases presenciales, repartidas en 5 sesiones que serán dictados por expertos del staff senior de la agencia usando herramientas, visión de industria y casos de éxito de <strong>VML</strong>.</p>
                <p>Las inscripciones serán gratuitas y se abrirán 25 cupos (aprox). El programa será certificado por VML a aquellos con más de un 80% de asistencia. Además, al finalizar el programa, <strong>se seleccionarán dos alumnos para una práctica remunerada de 3 meses en la agencia (meses a convenir).</strong></p>
                <button className="boton btn btn-primary" onClick={() => document.getElementById('aplicar').scrollIntoView({ behavior: 'smooth' })}>POSTULA</button>
            </div>

            <div className='fechalugar container mt-3'>
                <div className='fechalugarleft col-md-6 zoom'>
                    <h3>Fechas:</h3>
                    <p>18 de marzo a 5 de abril</p>
                    <p>Martes y jueves, de 17:00 a 19:00 hrs.</p>
                </div>

                <div className='fechalugarright col-md-6 zoom'>
                    <h3>Lugar:</h3>
                    <p><strong>VML Chile</strong></p>
                    <p>Av. Providencia 111, Providencia.</p>
                    <p>Piso 28</p>
                </div>
            </div>
        </div>
    );
};

export default ProgramInfo;
