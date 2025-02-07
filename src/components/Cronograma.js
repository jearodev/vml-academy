import React, { useState } from 'react';
import { Container, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Cronograma = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);

    const courses = [
        { title: 'Explorando la publicidad de hoy y mañana', date: '18-03-2025', link: '/programa1' },
        { title: 'El rol estratégico de la gestión de clientes', date: '20-03-2025', link: '/programa2' },
        { title: 'Estrategias para crear marcas conectadas', date: '20-03-2025', link: '/programa3' },
        { title: 'El poder de las ideas y la creatividad', date: '25-03-2025', link: '/programa4' },
        { title: 'Hacer que las lindas ideas sean ideas lindas', date: '25-03-2025', link: '/programa5' },
        { title: 'Social media en un mundo más digital', date: '27-03-2025', link: '/programa6' },
        { title: 'Produciendo nuevas experiencias', date: '27-03-2025', link: '/programa7' },
        { title: 'Creando marcas que generan valor', date: '01-04-2025', link: '/programa8' },
    ];

    return (
        <div>
            <div className='headermodule'>
                <Image src="/images/banner_vml.jpg" fluid />
            </div>

            <Container ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
                <h1>Cronograma</h1>
                <ListGroup>
                    {courses.map((course, index) => (
                        <Link to={course.link} key={index} className="text-decoration-none">
                            <ListGroupItem key={index} className="listcrono zoom">
                                <div><strong>{course.title}</strong></div>
                                <div>Fecha: <em>{course.date}</em></div>
                            </ListGroupItem>
                        </Link>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default Cronograma;
