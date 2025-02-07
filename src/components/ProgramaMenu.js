import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // Importa los iconos

const ModuleMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [currentIndex, setCurrentIndex] = useState(0);

    const menuItems = useMemo(() => [
        { path: '/programa1', label: 'Programa 1' },
        { path: '/programa2', label: 'Programa 2' },
        { path: '/programa3', label: 'Programa 3' },
        { path: '/programa4', label: 'Programa 4' },
        { path: '/programa5', label: 'Programa 5' },
        { path: '/programa6', label: 'Programa 6' },
        { path: '/programa7', label: 'Programa 7' },
        { path: '/programa8', label: 'Programa 8' },
    ], []);

    useEffect(() => {
        const currentPathIndex = menuItems.findIndex(item => item.path === location.pathname);
        if (currentPathIndex !== -1) {
            setCurrentIndex(currentPathIndex);
        }
    }, [location.pathname, menuItems]);

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % menuItems.length;
        setCurrentIndex(newIndex);
        navigate(menuItems[newIndex].path);
    };

    const handlePrevious = () => {
        const newIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        setCurrentIndex(newIndex);
        navigate(menuItems[newIndex].path);
    };

    return (
        <>
            {isMobile ? (
                <div className="mobile-menu-navigation">
                    <Button onClick={handlePrevious} variant="primary">
                        <FaArrowLeft /> <p>Anterior</p>
                    </Button>
                    <Button onClick={handleNext} variant="primary">
                        <p>Siguiente</p> <FaArrowRight />
                    </Button>
                </div>
            ) : (
                <div className="mobile-menu-navigation">
                    <Button onClick={handlePrevious} variant="primary">
                        <FaArrowLeft /> <p>Anterior</p>
                    </Button>
                    <Button onClick={handleNext} variant="primary">
                        <p>Siguiente</p> <FaArrowRight />
                    </Button>
                </div>
            )}
        </>
    );
};

export default ModuleMenu;
