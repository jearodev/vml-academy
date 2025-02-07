import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Linkedin } from "lucide-react"
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const equipo = [
    {
        name: "Vicente Carrasco",
        job: "Chief Executive Officer",
        linkedin: "https://www.linkedin.com/in/vicente-carrasco-6978131/",
        image: "/images/personas/vicente_carrasco.jpg",
        quote: "No es el mejor producto el que triunfa, sino el que mejor se comunica."
    },
    {
        name: "Paloma Opaso",
        job: "Chief People Officer",
        linkedin: "https://www.linkedin.com/in/paloma-opaso-unwin-209068a/",
        image: "/images/personas/paloma_opaso.jpg",
        quote: "El marketing no se trata de los productos que vendes, sino de las historias que cuentas."
    },
    {
        name: 'Oriol Albella',
        job: 'Chief Operations Office',
        linkedin: 'https://www.linkedin.com/in/ualbella/',
        image: '/images/personas/oriol_albella.jpg',
        quote: "Las marcas no compiten por atención, compiten por emociones."
    },
    {
        name: 'Francisca Vidal',
        job: 'Directora de Cuentas',
        linkedin: 'https://www.linkedin.com/in/francisca-javiera-vidal-trugeda-700a1b51/',
        image: '/images/personas/javiera_vidal.jpg',
        quote: "Cada campaña es un experimento: aprende, ajusta y vuelve a sorprender."
    },
    {
        name: 'Jose Antonio Varas',
        job: 'Chief Strategy Officer',
        linkedin: 'https://www.linkedin.com/in/joseantoniovaras/',
        image: '/images/personas/jose_antonio_varas.jpg',
        quote: "Un gran mensaje sin una buena estrategia es solo ruido."
    },
    {
        name: 'Sara Grandon',
        job: 'Directora de Planificación Estratégica',
        linkedin: 'https://www.linkedin.com/in/saragrandonm/',
        image: '/images/personas/sara_grandon.jpg',
        quote: "El marketing es como el amor: si solo hablas de ti, nadie se enamora."
    },
    {
        name: 'Raimundo Undurraga',
        job: 'Chief Creative Officer',
        linkedin: 'https://www.linkedin.com/in/raimundo-undurraga/',
        image: '/images/personas/raimundo_undurraga.jpg',
        quote: "El mejor anuncio no es el que más se ve, sino el que más se recuerda."
    },
    {
        name: 'Jaime Cano',
        job: 'Director Creativo',
        linkedin: 'https://www.linkedin.com/in/jaime-cano-41497688/',
        image: '/images/personas/jaime_cano.jpg',
        quote: "El marketing no es un gasto, es la inversión que convierte ideas en impacto."
    },
    {
        name: 'Andrés Fritz',
        job: 'Director de Contenidos',
        linkedin: 'https://www.linkedin.com/in/andresfritz/',
        image: '/images/personas/andres_fritz.jpg',
        quote: "Las tendencias cambian, pero la conexión con tu audiencia siempre será la clave."
    },
    {
        name: 'Francisca Miranda',
        job: 'Directora de Contenidos',
        linkedin: 'https://www.linkedin.com/in/kikamirandasilva/',
        image: '/images/personas/francisca_miranda.jpg',
        quote: "La creatividad vende, pero la autenticidad fideliza."
    },
    {
        name: 'Loreto González',
        job: 'Directora de Producción',
        linkedin: 'https://www.linkedin.com/in/m-loreto-gonz%C3%A1lez-guerrero-405890108/',
        image: '/images/personas/loreto_gonzalez.jpg',
        quote: "La creatividad es el mejor algoritmo para destacar en un mundo saturado."
    },
    {
        name: 'Andrés Villanova',
        job: 'Director de Martech',
        linkedin: 'https://www.linkedin.com/in/andresvillanova/',
        image: '/images/personas/andres_villanova.jpg',
        quote: "Si no puedes medirlo, no puedes mejorarlo; si no puedes emocionar, no puedes venderlo."
    },
    {
        name: 'Constanza Quezada',
        job: 'Directora de Consultoría',
        linkedin: 'https://www.linkedin.com/in/constanzaquezada/',
        image: '/images/personas/andres_villanova.jpg',
        quote: "Los datos te dicen qué pasa, pero la intuición te dice por qué."
    },
    {
        name: 'Ricardo López',
        job: 'Director de BAV ',
        linkedin: 'https://www.linkedin.com/in/ricardojavierlopezmo/',
        image: '/images/personas/andres_villanova.jpg',
        quote: "No busques más tráfico, busca más impacto."
    },
]

const Equipo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(setIsVisible);

    return (
        <Container id="equipo" ref={ref} className={`paddcontainer opacitycontainer ${isVisible ? 'fade-in' : ''}`}>
            <h1>Nuestro Equipo</h1>
            <Row>
                {equipo.map((miembro, miembroIndex) => (
                    <Col lg={4} md={6} sm={12} key={`${miembroIndex}`} className="mb-4">
                        <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <Card.Img
                                variant="top"
                                src={miembro.image}
                                alt={miembro.name}
                                style={{ height: "350px", objectFit: "cover", objectPosition: "top" }}
                            />
                            <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                <Card.Title>
                                    <h5>{miembro.name}</h5>
                                    <h6 className="text-muted">{miembro.job}</h6>
                                </Card.Title>
                                <Card.Text>{miembro.quote}</Card.Text>
                                <div className="mt-auto">
                                    <div className="text-center">
                                        <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary">
                                            <Linkedin size={24} />
                                        </a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Equipo