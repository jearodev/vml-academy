import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Linkedin } from "lucide-react"
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const equipo = [
    {
        name: "Vicente Carrasco",
        job: "Chief Executive Officer",
        linkedin: "https://www.linkedin.com/in/vicente-carrasco-6978131/",
        image: "/images/personas/vicente_carrasco.webp",
        quote: "No es el mejor producto el que triunfa, sino el que mejor se comunica."
    },
    {
        name: "Paloma Opaso",
        job: "Chief People Officer",
        linkedin: "https://www.linkedin.com/in/paloma-opaso-unwin-209068a/",
        image: "/images/personas/paloma_opaso.webp",
        quote: "El marketing no se trata de los productos que vendes, sino de las historias que cuentas."
    },
    {
        name: 'Oriol Albella',
        job: 'Chief Operations Office',
        linkedin: 'https://www.linkedin.com/in/ualbella/',
        image: '/images/personas/oriol_albella.webp',
        quote: "Las marcas no compiten por atención, compiten por emociones."
    }
]

const Equipo = () => {

    return (
        <Container id="equipo" className='fade-in mb-5'>
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
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Equipo