import React, { useState } from 'react';
import axios from 'axios';
import DropzoneUpload from './DropzoneUpload';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';  

const RegistrationForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null); 
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const ref = useIntersectionObserver(setIsVisible);

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

    const handleFileDrop = (file) => {
        if (file.size > MAX_FILE_SIZE) {
            Swal.fire({
                icon: 'error',
                title: 'Archivo demasiado grande',
                text: `El archivo seleccionado supera el tamaño máximo permitido de 5 MB. Por favor, selecciona un archivo más pequeño.`,
            });
        } else {
            setSelectedFile(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true); 
        
        const formData = new FormData(event.target);

        // Agregar archivo al formulario
        if (selectedFile) {
            formData.append('file', selectedFile);
        }

        // Imprimir los valores de formData para ver qué se está enviando
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        // Utilizar la variable de entorno para la URL del backend producción
        const apiUrl = "https://vmlacademy.vercel.app/api";
        //const apiUrl = "http://localhost:5000/api";

        axios.post(`${apiUrl}/upload`, formData)
            .then(response => {
                // Mostrar el popup de éxito con SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Formulario enviado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                });

                // Limpiar el formulario
                event.target.reset();
                setSelectedFile(null);
            })
            .catch(error => {
                // Mostrar el popup de error con SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Error enviando el formulario',
                    text: error.message,
                });
                console.error('Error enviando el formulario:', error);
            })
            .finally(() => {
                setIsSubmitting(false); 
            });
    };

    return (
        <div id="aplicar" ref={ref} className={`opacitycontainer container mt-5 ${isVisible ? 'fade-in' : ''}`}>
            <h1>Postula aquí</h1>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="university">Universidad</label>
                        <input type="text" className="form-control" id="university" name="university" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="major">Carrera</label>
                        <input type="text" className="form-control" id="major" name="major" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="motivation">Tus motivaciones para asistir a VML Academy</label>
                    <textarea className="form-control" id="motivation" name="motivation" rows="3" required></textarea>
                </div>
                <DropzoneUpload onFileDrop={handleFileDrop} /> 

                <div className="form-group">
                    <input type="checkbox" className="custom-checkbox" id="terms" name="terms" required />
                    <label htmlFor="terms">Acepto los términos y condiciones</label><Link to="/terminos" className="btn btn-link">- Leer términos y condiciones</Link>
                </div>

                <button type="submit" id="aplicarbutton" className="boton btn btn-primary" disabled={isSubmitting}>Aplicar</button>

            </form>
        </div>
    );
};

export default RegistrationForm;
