import React from 'react';

const Banner = () => {

    return (
        <div id='bannerhome' className="banner text-center">
            <div className='vml-logo'>
                <img className="vml-logo-img zoom" src="/images/vml-academy.png" alt="VML Academy" />
                <button className="boton btn btn-primary" onClick={() => document.getElementById('aplicar').scrollIntoView({ behavior: 'smooth' })}>POSTULA AHORA</button>
            </div>
            <img className="fondo-banner zoom" src="/images/fondo-banner.png" alt="Fondo Banner" />
        </div>
    );
};

export default Banner;
