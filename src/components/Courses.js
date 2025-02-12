import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';


const courses = [
    {
        title: 'Explorando la publicidad de hoy y mañana',
        description: 'La industria publicitaria está en constante cambio, y en este módulo te invitamos a explorar su panorama actual en Chile.',
        image: '/images/programa1.png',
        startDate: '18/03/2025',
        category: 'Introducción',
        teachers: [
            {
                name: 'Vicente Carrasco',
                job: 'Chief Executive Officer',
                linkedin: 'https://www.linkedin.com/in/vicente-carrasco-6978131/',
                image: '/images/personas/vicente_carrasco.webp'
            },
            {
                name: 'Paloma Opaso',
                job: 'Chief People Officer',
                linkedin: 'https://www.linkedin.com/in/paloma-opaso-unwin-209068a/',
                image: '/images/personas/paloma_opaso.webp'
            }
        ]
    },
    {
        title: 'El rol estratégico de la gestión de clientes',
        description: 'En el mundo de la publicidad, la gestión de clientes es clave para el éxito. Este módulo te sumergirá en los desafíos de un área de cuentas en una agencia como VML.',
        image: '/images/programa2.png',
        startDate: '20/03/2025',
        category: 'Cuentas',
        teachers: [
            {
                name: 'Oriol Albella',
                job: 'Chief Operations Office',
                linkedin: 'https://www.linkedin.com/in/ualbella/',
                image: '/images/personas/oriol_albella.webp'
            },
            {
                name: 'Francisca Vidal',
                job: 'Directora de Cuentas',
                linkedin: 'https://www.linkedin.com/in/francisca-javiera-vidal-trugeda-700a1b51/',
                image: '/images/personas/francisca_vidal.webp'
            }
        ]
    },
    {
        title: 'Estrategias para crear marcas conectadas',
        description: 'Las marcas que trascienden son aquellas que logran conectar culturalmente con sus audiencias.',
        image: '/images/programa1.png',
        startDate: '20/03/2025',
        category: 'Planning',
        teachers: [
            {
                name: 'Jose Antonio Varas',
                job: 'Chief Strategy Officer',
                linkedin: 'https://www.linkedin.com/in/joseantoniovaras/',
                image: '/images/personas/jose_antonio_varas.webp'
            },
            {
                name: 'Sara Grandon',
                job: 'Directora de Planificación Estratégica',
                linkedin: 'https://www.linkedin.com/in/saragrandonm/',
                image: '/images/personas/sara_grandon.webp'
            }
        ]
    },
    {
        title: 'El poder de las ideas y la creatividad',
        description: 'Detrás de cada campaña publicitaria exitosa hay un proceso creativo sólido. VML te abre las puertas a su departamento creativo para que conozcas cómo se gestan las grandes ideas.',
        image: '/images/programa2.png',
        startDate: '25/03/2025',
        category: 'Redacción',
        teachers: [
            {
                name: 'Raimundo Undurraga',
                job: 'Chief Creative Officer',
                linkedin: 'https://www.linkedin.com/in/raimundo-undurraga/',
                image: '/images/personas/raimundo_undurraga.webp'
            }
        ]
    },
    {
        title: 'Hacer que las lindas ideas sean ideas lindas',
        description: 'Una idea brillante necesita una ejecución impecable para alcanzar su máximo potencial. En este módulo, VML te sumergirá en el mundo de la dirección de arte.',
        image: '/images/programa1.png',
        startDate: '25/03/2025',
        category: 'Dirección de Arte',
        teachers: [
            {
                name: 'Jaime Cano',
                job: 'Director Creativo',
                linkedin: 'https://www.linkedin.com/in/jaime-cano-41497688/',
                image: '/images/personas/jaime_cano.webp'
            }
        ]
    },

    {
        title: 'Social media en un mundo más digital',
        description: 'El social media se ha convertido en un escenario fundamental para las marcas que buscan conectar con sus audiencias. En este módulo, VML te invitará a explorar las últimas tendencias en social media marketing.',
        image: '/images/programa2.png',
        startDate: '27/03/2025',
        category: 'Social y Digital',
        teachers: [
            {
                name: 'Andrés Fritz',
                job: 'Director de Contenidos',
                linkedin: 'https://www.linkedin.com/in/andresfritz/',
                image: '/images/personas/andres_fritz.webp'
            },
            {
                name: 'Francisca Miranda',
                job: 'Directora de Contenidos',
                linkedin: 'https://www.linkedin.com/in/kikamirandasilva/',
                image: '/images/personas/francisca_miranda.webp'
            },
        ]
    },
    {
        title: 'Produciendo nuevas experiencias',
        description: 'La publicidad actual va más allá de los formatos tradicionales. En este módulo, VML te mostrará cómo se producen experiencias de marca innovadoras que integran lo digital y lo físico.',
        image: '/images/programa1.png',
        startDate: '27/03/2025',
        category: 'Martech y producción',
        teachers: [
            {
                name: 'Loreto González',
                job: 'Directora de Producción',
                linkedin: 'https://www.linkedin.com/in/m-loreto-gonz%C3%A1lez-guerrero-405890108/',
                image: '/images/personas/loreto_gonzalez.webp'
            },
            {
                name: 'Andrés Villanova',
                job: 'Director de Martech',
                linkedin: 'https://www.linkedin.com/in/andresvillanova/',
                image: '/images/personas/andres_villanova.webp'
            },
        ]
    },
    {
        title: 'Creando marcas que generan valor',
        description: 'Las marcas más exitosas son aquellas que tienen un propósito claro y generan valor para sus audiencias. En este módulo, VML te invitará a explorar el mundo de la consultoría de marca.',
        image: '/images/programa2.png',
        startDate: '01/04/2025',
        category: 'Consultoría',
        teachers: [
            {
                name: 'Constanza Quezada',
                job: 'Directora de Consultoría',
                linkedin: 'https://www.linkedin.com/in/constanzaquezada/',
                image: '/images/personas/constanza_quezada.webp'
            },
            {
                name: 'Ricardo López',
                job: 'Director de BAV ',
                linkedin: 'https://www.linkedin.com/in/ricardojavierlopezmo/',
                image: '/images/personas/ricardo_lopez.webp'
            },
        ]
    },
];


const Courses = () => {

    return (
        <Container id="programas" className={`fade-in`}>
            <h1>Programa</h1>
            <Row>
                {courses.map((course, index) => (
                    <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                        <Card style={{ display: "flex", flexDirection: "column", height: "650px" }}>
                            <div style={{ position: "relative" }}>
                                <Card.Img
                                    variant="top"
                                    src={course.image}
                                    alt={course.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        left: "10px",
                                        background: "rgba(0,0,0,0.7)",
                                        color: "white",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        fontSize: "0.8rem",
                                        display: "flex",
                                        alignItems: "center",
                                        height: "30px",
                                    }}
                                >
                                    {course.category}
                                </div>
                            </div>
                            <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                <div>
                                    <Card.Title>
                                        <h5>{course.title}</h5>
                                    </Card.Title>
                                    <Card.Text>{course.description}</Card.Text>
                                </div>
                                <div className="mt-auto">
                                    <div className="mb-2">
                                        <strong>Fecha de inicio:</strong> {course.startDate}
                                    </div>
                                    <div className="mb-3">
                                        <strong>Profesores:</strong>
                                        <div className="d-flex mt-2 flex-wrap justify-content-center">
                                            {course.teachers.map((teacher, teacherIndex) => (
                                                <div key={teacherIndex} className="me-3 mb-2 mt-2 text-center" style={{ minWidth: "100px" }}>
                                                    <a
                                                        href={teacher.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ textDecoration: "none", color: "inherit" }}
                                                    >
                                                        <Image
                                                            src={teacher.image || "/placeholder.svg"}
                                                            alt={teacher.name}
                                                            roundedCircle
                                                            style={{ width: "80px", height: "80px", objectFit: "cover", aspectRatio: "16/9" }}
                                                        />
                                                        <div style={{ fontSize: "0.8rem", fontWeight: "bold", marginTop: "5px" }}>
                                                            {teacher.name}
                                                        </div>
                                                        <div
                                                            style={{
                                                                fontSize: "0.7rem",
                                                                color: "#666",
                                                                lineHeight: "1.2",
                                                                maxWidth: "100px",
                                                                margin: "0 auto",
                                                            }}
                                                        >
                                                            {teacher.job}
                                                        </div>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Courses;
