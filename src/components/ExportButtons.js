import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ExportButtons = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleExport = async (format) => {
        setIsLoading(true);
        try {
            Swal.fire({
                title: 'Exportando datos',
                text: 'Por favor, espere...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            const response = await fetch(`/api/export-${format}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `registros.${format}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);

            Swal.fire({
                icon: 'success',
                title: '¡Exportación exitosa!',
                text: `Los datos han sido exportados a ${format.toUpperCase()} correctamente.`,
                confirmButtonText: 'Gracias'
            });
        } catch (error) {
            console.error('Error al exportar:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error en la exportación',
                text: 'Hubo un problema al exportar los datos. Por favor, intenta de nuevo.',
                confirmButtonText: 'Entendido'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={() => handleExport('csv')}
                disabled={isLoading}
                style={{
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '4px 2px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    opacity: isLoading ? 0.5 : 1
                }}
            >
                Exportar a CSV
            </button>
            <button
                onClick={() => handleExport('xls')}
                disabled={isLoading}
                style={{
                    backgroundColor: '#008CBA',
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '4px 2px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    opacity: isLoading ? 0.5 : 1
                }}
            >
                Exportar a Excel
            </button>
        </div>
    );
};

export default ExportButtons;