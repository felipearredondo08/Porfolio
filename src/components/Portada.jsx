import React from 'react';
import Portadafoto from '../assets/portada.png';
import './Portada.css';

const Portada = ({ darkMode }) => {
  return (
    <>
      <div className={`PortadaTotal ${darkMode ? 'dark-mode' : ''}`}>
        <div className="contenedor-nombre">
          <h1 className="fadeIn slideIn">
            <span id="felipe-color">Felipe</span>
            <span id="arredondo-color"> Arredondo</span>
          </h1>
          
          <h2 id="desarrollador" className={`fadeIn slideIn ${darkMode ? 'white-text' : ''}`}>Desarrollador Web</h2>
        </div>
        <img src={Portadafoto} alt="portada" id="foto-portada" />
      </div>
    </>
  );
};

export default Portada;