import React, { useEffect, useState } from 'react';
import Login from './Login'; // Asegúrate de importar el componente Login
import ExportButtons from './ExportButtons';

const UsersList = () => {
  const [files, setFiles] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      // Realizando la solicitud a la API
      fetch('/api/registros')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setFiles(data); // Guardar los datos en el estado
        })
        .catch(error => {
          console.error('Error al recuperar archivos:', error);
        });
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className='registrados'>
      <h1>Usuarios Registrados</h1>
      <ExportButtons />
      <ul>
        {files.length === 0 && <p>No se encontraron archivos.</p>}
        {files.map(file => (
          <li key={file._id}>
            <a href={file.filePath} target="_blank" rel="noopener noreferrer">{file.fileName}</a>
            <p><strong>Nombre:</strong> {file.userData.firstName} {file.userData.lastName}</p>
            <p><strong>Correo:</strong> {file.userData.email}</p>
            <p><strong>Universidad:</strong> {file.userData.university}</p>
            <p><strong>Carrera:</strong> {file.userData.major}</p>
            <p><strong>VML Academy:</strong> {file.userData.motivation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
