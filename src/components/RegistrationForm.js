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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData();

            // Asegúrate de que el archivo se adjunta correctamente
            if (selectedFile) {
                formData.append('file', selectedFile, selectedFile.name);
                console.log('Archivo adjuntado:', selectedFile);
            } else {
                throw new Error('Por favor, selecciona un archivo');
            }

            // Agregar los demás campos
            const fields = ['firstName', 'lastName', 'email', 'university', 'major', 'motivation'];
            fields.forEach(field => {
                formData.append(field, event.target[field].value);
            });

            // Log para verificar el FormData
            for (let pair of formData.entries()) {
                console.log('FormData:', pair[0], pair[1]);
            }

            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log('Progreso de carga:', percentCompleted);
                }
            });

            console.log('Respuesta del servidor:', response.data);

            Swal.fire({
                icon: 'success',
                title: 'Formulario enviado con éxito',
                text: response.data.message,
            });

            event.target.reset();
            setSelectedFile(null);
        } catch (error) {
            console.error('Error detallado:', error);
            console.error('Respuesta del servidor:', error.response?.data);

            Swal.fire({
                icon: 'error',
                title: 'Error al enviar el formulario',
                text: error.response?.data?.error || error.message || 'Error al procesar la solicitud'
            });
        } finally {
            setIsSubmitting(false);
        }
    };




    return (
        <div id="aplicar" ref={ref} className={`opacitycontainer container ${isVisible ? 'fade-in' : ''}`}>
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
