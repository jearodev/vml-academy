import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setIsActive) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsActive(true); // Activar el estado cuando el elemento está visible
                    observer.unobserve(entry.target); // Opcional: dejar de observar después de la primera intersección
                }
            });
        }, { threshold: 0.1 });

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [setIsActive]); // Solo se ejecuta una vez, a menos que setIsActive cambie

    return elementRef;
};

export default useIntersectionObserver;
