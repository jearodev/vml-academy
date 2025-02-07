import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const courses = [
    {
        title: 'Explorando la publicidad de hoy y mañana',
        description: 'La industria publicitaria está en constante cambio, y en este módulo te invitamos a explorar su panorama actual en Chile.',
        image: '/images/programa1.png',
        link: '/programa1'
    },
    {
        title: 'El rol estratégico de la gestión de clientes',
        description: 'En el mundo de la publicidad, la gestión de clientes es clave para el éxito. Este módulo te sumergirá en los desafíos de un área de cuentas en una agencia como VML.',
        image: '/images/programa2.png',
        link: '/programa2'
    },
    {
        title: 'Estrategias para crear marcas conectadas',
        description: 'Las marcas que trascienden son aquellas que logran conectar culturalmente con sus audiencias. En este módulo, VML te invita a explorar el fascinante mundo del planning estratégico.',
        image: '/images/programa1.png',
        link: '/programa3'
    },
    {
        title: 'El poder de las ideas y la creatividad',
        description: 'Detrás de cada campaña publicitaria exitosa hay un proceso creativo sólido. VML te abre las puertas a su departamento creativo para que conozcas cómo se gestan las grandes ideas.',
        image: '/images/programa2.png',
        link: '/programa4'
    },
    {
        title: 'Hacer que las lindas ideas sean ideas lindas',
        description: 'Una idea brillante necesita una ejecución impecable para alcanzar su máximo potencial. En este módulo, VML te sumergirá en el mundo de la dirección de arte.',
        image: '/images/programa1.png',
        link: '/programa5'
    },
    
    {
        title: 'Social media en un mundo más digital',
        description: 'El social media se ha convertido en un escenario fundamental para las marcas que buscan conectar con sus audiencias. En este módulo, VML te invitará a explorar las últimas tendencias en social media marketing.',
        image: '/images/programa2.png',
        link: '/programa6'
    },
    {
        title: 'Produciendo nuevas experiencias',
        description: 'La publicidad actual va más allá de los formatos tradicionales. En este módulo, VML te mostrará cómo se producen experiencias de marca innovadoras que integran lo digital y lo físico.',
        image: '/images/programa1.png',
        link: '/programa7'
    },
    {
        title: 'Creando marcas que generan valor',
        description: 'Las marcas más exitosas son aquellas que tienen un propósito claro y generan valor para sus audiencias. En este módulo, VML te invitará a explorar el mundo de la consultoría de marca.',
        image: '/images/programa2.png',
        link: '/programa8'
    },
];


const Courses = () => {

    return (
        <Container id="programas" className={`fade-in`}>
            <h1>Programa</h1>
            <Row>
                {courses.map((course, index) => (
                    <Col md={4} sm={6} key={index} className="mb-4">
                        <Card>
                            <Link to={course.link} className="text-decoration-none">
                                <Card.Img variant="top" src={course.image} alt={course.title} />
                                <Card.Body>
                                    <Card.Title><h5>{course.title}</h5></Card.Title>
                                    <Card.Text>{course.description}</Card.Text>
                                    <Button as={Link} to={course.link} variant="primary">Más información</Button>
                                </Card.Body>
                            </Link>    
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Courses;
