import React, { useEffect, useRef, useMemo } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const MapComponent = () => {
    const mapRef = useRef(null);
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyATKuGwPX1dngd1kv_1ZufHHri_xWrbwKI",
        version: "weekly",
        libraries: ['places'],
    });

    const mapStyles = useMemo(() => [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2e1dfb"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ff01a7"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ff01a7"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d10c8c"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d10c8c"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ff01a7"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ff01a7"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#d10c8c"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ff01a7"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ], []);

    const location = useMemo(() => ({ lat: -33.4370216, lng: -70.6327083 }), []);

    useEffect(() => {
        if (isLoaded && mapRef.current && window.google) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: location,
                zoom: 16,
                styles: mapStyles,
                disableDefaultUI: true
            });

            const marker = new window.google.maps.Marker({
                position: location,
                map,
                title: 'Avenida Providencia #111',
                icon: {
                    url: '/images/marker.png',
                    size: new window.google.maps.Size(50, 63),
                    scaledSize: new window.google.maps.Size(50, 63)
                }
            });

            // Función para alternar la animación de salto
            const toggleBounce = () => {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(window.google.maps.Animation.BOUNCE);
                }
            };

            // Establecer la animación en loop
            const intervalId = setInterval(toggleBounce, 2000); // Reinicia cada 2 segundos

            // Limpieza en caso de desmontar el componente
            return () => clearInterval(intervalId);
        }
    }, [isLoaded, location, mapStyles]);

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    return (
        <div ref={mapRef} style={{ width: '100%', height: '600px' }}></div>
    );
};

export default MapComponent;