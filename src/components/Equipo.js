import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap"
import { Linkedin } from "lucide-react"
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const equipos = [
  {
    equipo: "Coordinación",
    miembros: [
      {
        name: "Paloma Opaso",
        job: "Chief Executive Officer",
        image: "/images/personas/paloma_opaso.webp",
      },
      {
        name: "Cecilia De Marchena",
        job: "Chief People Officer",
        image: "/images/personas/paloma_opaso.webp",
      },
      {
        name: 'Jose Antonio Varas',
        job: 'Chief Strategy Officer',
        image: '/images/personas/jose_antonio_varas.webp',
      },
      {
        name: 'Javier Marchant',
        job: 'Chief Operations Office',
        image: '/images/personas/oriol_albella.webp',
      }
    ]
  },
  {
    equipo: "Contenido comunicaciones",
    miembros: [
      {
        name: "Jaime Cano",
        job: "Director Creativo",
        image: "/images/personas/jaime_cano.webp",
      },
      {
        name: "Daisy Vera",
        job: "Chief People Officer",
        image: "/images/personas/paloma_opaso.webp",
      },
      {
        name: 'Por confirmar',
        job: 'Chief Operations Office',
        image: '/images/personas/oriol_albella.webp',
      }
    ]
  },
  {
    equipo: "Desarrollo Web",
    miembros: [
      {
        name: "Andres Villanueva",
        job: "Director de Martech",
        image: "/images/personas/andres_villanueva.webp",
      },
      {
        name: "Nicolás Gaitan",
        job: "Chief People Officer",
        image: "/images/personas/paloma_opaso.webp",
      },
      {
        name: 'Karin Boettiger',
        job: 'Chief Operations Office',
        image: '/images/personas/oriol_albella.webp',
      },
      {
        name: 'Jean Rodríguez',
        job: 'Desarrollador Web',
        image: '/images/personas/oriol_albella.webp',
      }
    ]
  }
]

const Equipo = () => {

  return (
    <Container id="equipo" className="fade-in my-5">
      <h1>Nuestro Equipo</h1>
      {equipos.map((equipo, equipoIndex) => (
        <div key={equipoIndex}>
          <h3 className='mb-4' style={{ fontSize: "1.5rem", fontWeight: "500", color: "#232323" }}>{equipo.equipo}</h3>
          <Row className='mb-4 mx-2'>
            {equipo.miembros.map((miembro, miembroIndex) => (
              <Col lg={3} md={6} sm={12} key={`${equipoIndex}-${miembroIndex}`} className="mb-4">
                <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
                  <Image
                    src={miembro.image || "/placeholder.svg"}
                    alt={miembro.name}
                    roundedCircle
                    style={{
                      width: "100px",
                      objectFit: "cover",
                      objectPosition: "center",
                      aspectRatio: "1/1",
                      marginRight: "1rem",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
                    <h5 style={{ color: "#ff01a7" }}>{miembro.name}</h5>
                    <h6 className="text-muted">{miembro.job}</h6>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  )
}

export default Equipo