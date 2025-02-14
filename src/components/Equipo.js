import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap"

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
        job: "HR Business Partner",
        image: "/images/personas/cecilia_de_marchena.webp",
      },
      {
        name: 'Jose Antonio Varas',
        job: 'Chief Strategy Officer',
        image: '/images/personas/jose_antonio_varas.webp',
      },
      {
        name: 'Javier Marchant',
        job: 'Brand Planner',
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
        job: "Social Media Manager",
        image: "/images/personas/paloma_opaso.webp",
      },
      {
        name: 'Gabriela Aguilar',
        job: 'Content Creator',
        image: '/images/personas/oriol_albella.webp',
      }
    ]
  },
  {
    equipo: "Desarrollo Web",
    miembros: [
      {
        name: "Andres Villanova",
        job: "Director de Martech",
        image: "/images/personas/andres_villanova.webp",
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
        image: '/images/personas/jean_rodriguez.webp',
      }
    ]
  }
]

const Equipo = () => {

  return (
    <Container id="equipo" className={`fade-in`}>
      <h1>Nuestro Equipo</h1>
      {equipos.map((equipo, equipoIndex) => (
        <div key={equipoIndex}>
          <h3 className='mb-4' style={{ fontSize: "1.5rem", fontWeight: "500", color: "#232323" }}>{equipo.equipo}</h3>
          <Row className='mb-4'>
            {equipo.miembros.map((miembro, miembroIndex) => (
              <Col lg={4} md={6} sm={12} key={`${equipoIndex}-${miembroIndex}`} className="mb-4">
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