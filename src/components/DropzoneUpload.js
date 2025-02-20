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
                        <p>Arrastra tu archivo acá o haz clic para subirlo. Tamaño máximo 5MB</p>
                    </div>
                )}
            </Dropzone>
            <p style={{ textAlign: "left" }}><i>*documento que acredite los años, semestres o cursos ya cursados.</i></p>

            {fileName && (
                <div className="file-name" style={{ marginTop: '10px' }}>
                    <p>Archivo seleccionado: {fileName}</p>
                </div>
            )}
        </div>
    );
};

export default DropzoneUpload;
