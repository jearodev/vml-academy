import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const DropzoneUpload = ({ onFileDrop }) => {
    const [fileName, setFileName] = useState(null);

    const handleDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        onFileDrop(file);
        setFileName(file.name);
    };

    return (
        <div className="form-group dropzonestyle">
            <label htmlFor="file">Certificado de avance curricular (PDF, JPG, PNG, WEBP):</label>
            <Dropzone 
                onDrop={handleDrop} 
                accept={{
                    'application/pdf': ['.pdf'],
                    'image/jpeg': ['.jpg', '.jpeg'],
                    'image/png': ['.png'],
                    'image/webp': ['.webp'],
                }}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', cursor: 'pointer' }}>
                        <input {...getInputProps()} />
                        <p>Arrastrá tu archivo acá o hacé clic para subirlo. Tamaño máximo 5MB</p>
                    </div>
                )}
            </Dropzone>
            {fileName && (
                <div className="file-name" style={{ marginTop: '10px' }}>
                    <p>Archivo seleccionado: {fileName}</p>
                </div>
            )}
        </div>
    );
};

export default DropzoneUpload;
