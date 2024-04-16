import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../assets/emoji-wink.svg";
import gitlogo from "../assets/github.svg";
import iglogo from "../assets/instagram.svg";
import curriculumPdf from "../assets/curriculumVitaeFelipeArredondo.pdf"; // Importa el archivo PDF

const Menu = () => {

  // MODO OSCURO

  
  
// -------------------

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Agregar un retraso para iniciar la animación de fade in después de 500ms
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    // Limpiar el temporizador en la limpieza del efecto
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className={`navbar bg-body-tertiary ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          {/* Logo y nombre en el navbar */}
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="logo-img d-inline-block align-text-top"
            />
            Felipe Arredondo
          </a>
          {/* Menú de navegación para dispositivos de escritorio */}
          <ul className="nav nav-tabs d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#container-about">Sobre mi</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" id="boton-proyectos">Proyectos</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#mnemo">mNemo</a></li>
                <li><a className="dropdown-item" href="#receptivo">Receptivo Cataratas</a></li>
                <li><a className="dropdown-item" href="#flappy">Flappy Bird Clon</a></li>
                <li><a className="dropdown-item" href="#hitandjump">Hit and Jump</a></li>
                <li><a className="dropdown-item" href="#abogada">Abogada Denise Pastrello</a></li>
                <li><a className="dropdown-item" href="#webcode">WebCode Desarrollo web</a></li>
                <li><a className="dropdown-item" href="#calculadora">Calculadora</a></li>
              </ul>
            </li>
            <li className="nav-item">
              {/* Enlace para abrir el curriculum en una nueva pestaña */}
              <a className="nav-link active" aria-current="page" href={curriculumPdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
            </li>
            {/* Íconos de redes sociales */}
            <li className="social-icons">
              <a href='https://github.com/felipearredondo08' target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt="Logo" width="30" height="24" className="icon"></img></a>
              <a href='https://www.instagram.com/felipe_axxedondo/?hl=es' target="_blank" rel="noopener noreferrer"><img src={iglogo} alt="Logo" width="30" height="24" className="icon"></img></a>
            </li>            
            <li>
           
            </li>
          </ul>
          {/* Menú desplegable para dispositivos móviles */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-lg-none">
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre mi</a>
              </li>
              <li className="nav-item">
                {/* Enlace para abrir el curriculum en una nueva pestaña */}
                <a className="nav-link" href={curriculumPdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Proyectos</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#mnemo">mNemo</a></li>
                  <li><a className="dropdown-item" href="#receptivo">Receptivo Cataratas</a></li>
                  <li><a className="dropdown-item" href="#flappy">Flappy Bird Clon</a></li>
                  <li><a className="dropdown-item" href="#hitandjump">Hit and Jump</a></li>
                  <li><a className="dropdown-item" href="#abogada">Abogada Denise Pastrello</a></li>
                  <li><a className="dropdown-item" href="#webcode">WebCode Desarrollo web</a></li>
                  <li><a className="dropdown-item" href="#calculadora">Calculadora</a></li>
                </ul>
              </li>
              {/* Íconos de redes sociales */}
              <li className="social-icons">
                <a href='https://github.com/felipearredondo08' target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt="Logo" width="30" height="24" className="icon"></img></a>
                <a href='https://www.instagram.com/felipe_axxedondo/?hl=es' target="_blank" rel="noopener noreferrer"><img src={iglogo} alt="Logo" width="30" height="24" className="icon"></img></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;