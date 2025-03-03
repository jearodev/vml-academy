"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import DropzoneUpload from "./DropzoneUpload"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { Spinner } from "react-bootstrap"

const RegistrationForm = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        university: "",
        major: "",
        motivation: "",
        terms: false,
    })
    const ref = useIntersectionObserver(setIsVisible)

    const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB

    const validateForm = () => {
        const isValid =
            formData.firstName.trim() !== "" &&
            formData.lastName.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.university.trim() !== "" &&
            formData.major.trim() !== "" &&
            formData.motivation.trim() !== "" &&
            formData.terms &&
            selectedFile !== null &&
            emailError === ""

        setIsFormValid(isValid)
    }

    useEffect(() => {
        validateForm()
    }, [formData])

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleFileDrop = (file) => {
        if (file.size > MAX_FILE_SIZE) {
            Swal.fire({
                icon: "error",
                title: "Archivo demasiado grande",
                text: `El archivo seleccionado supera el tamaño máximo permitido de 5 MB. Por favor, selecciona un archivo más pequeño.`,
            })
            setSelectedFile(null)
        } else {
            setSelectedFile(file)
        }
    }

    const checkEmail = async (email) => {
        try {
            const response = await axios.get(`/api/check-email?email=${email}`)
            setEmailError("")
            return true
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setEmailError("Este email ya está registrado.")
                return false
            }
            console.error("Error al verificar el email:", error)
            return false
        }
    }

    const REGISTRATION_CLOSED = true // Nueva constante para controlar si el registro está cerrado
    const CLOSED_MESSAGE = "El período de inscripción ha finalizado. Gracias por tu interés." // Mensaje a mostrar

    const handleSubmit = async (event) => {
        event.preventDefault()

        // Evitar envío si el registro está cerrado
        if (REGISTRATION_CLOSED) {
            Swal.fire({
                icon: "info",
                title: "Inscripciones cerradas",
                text: CLOSED_MESSAGE,
            })
            return
        }

        setIsSubmitting(true)
        setIsLoading(true) // Activar el spinner

        const isEmailValid = await checkEmail(formData.email)

        if (!isEmailValid) {
            setIsSubmitting(false)
            setIsLoading(false)
            return
        }

        try {
            const formDataToSend = new FormData()

            if (selectedFile) {
                formDataToSend.append("file", selectedFile, selectedFile.name)
                console.log("Archivo adjuntado:", selectedFile)
            } else {
                throw new Error("Por favor, selecciona un archivo")
            }

            Object.keys(formData).forEach((key) => {
                if (key !== "terms") {
                    formDataToSend.append(key, formData[key])
                }
            })

            const response = await axios.post("/api/upload", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    console.log("Progreso de carga:", percentCompleted)
                },
            })

            console.log("Respuesta del servidor:", response.data)

            Swal.fire({
                icon: "success",
                title: "Tu postulación ha sido enviada con éxito",
                text: "Durante la semana del 3 de marzo notificaremos a los postulantes seleccionados.",
            })

            // Resetear el formulario
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                university: "",
                major: "",
                motivation: "",
                terms: false,
            })
            setSelectedFile(null)
            setEmailError("")
        } catch (error) {
            console.error("Error detallado:", error)
            console.error("Respuesta del servidor:", error.response?.data)

            Swal.fire({
                icon: "error",
                title: "Error al enviar el formulario",
                text: error.response?.data?.error || error.message || "Error al procesar la solicitud",
            })
        } finally {
            setIsSubmitting(false)
            setIsLoading(false) // Desactivar el spinner
        }
    }

    return (
        <div id="aplicar" ref={ref} className={`opacitycontainer container ${isVisible ? "fade-in" : ""}`}>
            <h1>Postula aquí</h1>

            {REGISTRATION_CLOSED && (
                <div className="alert alert-info mb-4" role="alert">
                    <strong>{CLOSED_MESSAGE}</strong>
                </div>
            )}

            <form id="registrationForm" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            disabled={REGISTRATION_CLOSED}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            disabled={REGISTRATION_CLOSED}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        className={`form-control ${emailError ? "is-invalid" : ""}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={(e) => checkEmail(e.target.value)}
                        required
                        disabled={REGISTRATION_CLOSED}
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="university">Universidad</label>
                        <input
                            type="text"
                            className="form-control"
                            id="university"
                            name="university"
                            value={formData.university}
                            onChange={handleInputChange}
                            required
                            disabled={REGISTRATION_CLOSED}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="major">Carrera</label>
                        <input
                            type="text"
                            className="form-control"
                            id="major"
                            name="major"
                            value={formData.major}
                            onChange={handleInputChange}
                            required
                            disabled={REGISTRATION_CLOSED}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="motivation">Tus motivaciones para asistir a VML Academy</label>
                    <textarea
                        className="form-control"
                        id="motivation"
                        name="motivation"
                        rows="3"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        disabled={REGISTRATION_CLOSED}
                    ></textarea>
                </div>

                {!REGISTRATION_CLOSED && <DropzoneUpload onFileDrop={handleFileDrop} />}
                {REGISTRATION_CLOSED && (
                    <div className="mb-3 p-3 border rounded bg-light">
                        <p className="mb-0">
                            El componente de carga de archivos no está disponible porque el período de inscripción ha finalizado.
                        </p>
                    </div>
                )}

                {!REGISTRATION_CLOSED && (
                    <div className="form-group">
                        <input
                            type="checkbox"
                            className="custom-checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="terms">Acepto los términos y condiciones</label>
                        <Link to="/terminos" className="btn btn-link">
                            - Leer términos y condiciones
                        </Link>
                    </div>
                )}

                {!REGISTRATION_CLOSED && (
                    <button
                        type="submit"
                        id="aplicarbutton"
                        className="boton btn btn-primary d-flex align-items-center justify-content-center"
                        disabled={isSubmitting || !isFormValid}
                    >
                        {isLoading && (
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                        )}
                        <span>{isLoading ? "Enviando..." : "Postular"}</span>
                    </button>
                )}
            </form>
        </div>
    )
}

export default RegistrationForm

