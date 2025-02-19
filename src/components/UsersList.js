import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Form, Button, Spinner, Pagination } from "react-bootstrap"
import { FaEnvelope, FaUniversity, FaGraduationCap, FaBook } from "react-icons/fa"
import Login from "./Login"
import ExportButtons from "./ExportButtons"

const ITEMS_PER_PAGE = 9

const UsersList = () => {
  const [files, setFiles] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true)
      fetch("/api/registros")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          setFiles(data)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("Error al recuperar archivos:", error)
          setIsLoading(false)
        })
    }
  }, [isAuthenticated])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const filteredFiles = files.filter(
    (file) =>
      file.userData.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.userData.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.userData.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const pageCount = Math.ceil(filteredFiles.length / ITEMS_PER_PAGE)
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentItems = filteredFiles.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <Container style={{ marginTop: "5rem" }}>
      <h1 className="text-center mb-4">Usuarios Registrados</h1>
      <Row className="mb-4">
        <Col>
          <ExportButtons />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="searchUsers">
            <Form.Control
              type="text"
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
          <p className="mt-2">Cargando usuarios...</p>
        </div>
      ) : (
        <>
          {filteredFiles.length === 0 && <p className="text-center text-muted">No se encontraron usuarios.</p>}
          <Row xs={1} md={2} lg={3} className="g-4">
            {currentItems.map((file) => (
              <Col key={file._id}>
                <Card className="h-100 shadow-sm">
                  <Card.Header className="bg-primary text-white">
                    <Card.Title>
                      {file.userData.firstName} {file.userData.lastName}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <FaEnvelope className="me-2" />
                      {file.userData.email}
                    </Card.Text>
                    <Card.Text>
                      <FaUniversity className="me-2" />
                      {file.userData.university}
                    </Card.Text>
                    <Card.Text>
                      <FaGraduationCap className="me-2" />
                      {file.userData.major}
                    </Card.Text>
                    <div className="mt-3">
                      <strong>
                        <FaBook className="me-2" />
                        VML Academy:
                      </strong>
                      <div
                        style={{
                          height: "100px",
                          overflowY: "auto",
                          border: "1px solid #dee2e6",
                          borderRadius: "0.25rem",
                          padding: "0.5rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        {file.userData.motivation}
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-top-0">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      href={file.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver archivo
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          {pageCount > 1 && (
            <Row style={{ marginTop: "4rem" }}>
              <Col className="d-flex justify-content-center">
                <Pagination>
                  <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                  <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                  {[...Array(pageCount)].map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pageCount}
                  />
                  <Pagination.Last onClick={() => handlePageChange(pageCount)} disabled={currentPage === pageCount} />
                </Pagination>
              </Col>
            </Row>
          )}
        </>
      )}
    </Container>
  )
}

export default UsersList