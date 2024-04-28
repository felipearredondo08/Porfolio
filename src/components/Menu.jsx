// import React, { useEffect, useState } from "react";
// import "./Menu.css";
// import logo from "../assets/emoji-wink.svg";
// import gitlogo from "../assets/github.svg";
// import iglogo from "../assets/instagram.svg";
// import curriculumPdf from "../assets/curriculumVitaeFelipeArredondo.pdf"; // Importa el archivo PDF

// const Menu = () => {

//   // MODO OSCURO

  
  
// // -------------------

//   const [fadeIn, setFadeIn] = useState(false);

  


//   return (
//     <>
//       <nav className={`navbar bg-body-tertiary ${fadeIn ? "fade-in" : ""}`}>
//         <div className="container">
//           {/* Logo y nombre en el navbar */}
//           <a className="navbar-brand" href="#">
//             <img
//               src={logo}
//               alt="Logo"
//               width="30"
//               height="24"
//               className="logo-img d-inline-block align-text-top"
//             />
//             Felipe Arredondo
//           </a>
//           {/* Menú de navegación para dispositivos de escritorio */}
          // <ul className="nav nav-tabs d-none d-lg-flex">
          //   <li className="nav-item">
          //     <a className="nav-link active" aria-current="page" href="#container-about">Sobre mi</a>
          //   </li>
          //   <li className="nav-item dropdown">
          //     <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" id="boton-proyectos">Proyectos</a>
          //     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          //       <li><a className="dropdown-item" href="#mnemo">mNemo</a></li>
          //       <li><a className="dropdown-item" href="#receptivo">Receptivo Cataratas</a></li>
          //       <li><a className="dropdown-item" href="#flappy">Flappy Bird Clon</a></li>
          //       <li><a className="dropdown-item" href="#hitandjump">Hit and Jump</a></li>
          //       <li><a className="dropdown-item" href="#abogada">Abogada Denise Pastrello</a></li>
          //       <li><a className="dropdown-item" href="#webcode">WebCode Desarrollo web</a></li>
          //       <li><a className="dropdown-item" href="#calculadora">Calculadora</a></li>
          //     </ul>
          //   </li>
          //   <li className="nav-item">
          //     {/* Enlace para abrir el curriculum en una nueva pestaña */}
          //     <a className="nav-link active" aria-current="page" href={curriculumPdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
          //   </li>
          //   {/* Íconos de redes sociales */}
          //   <li className="social-icons">
          //     <a href='https://github.com/felipearredondo08' target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt="Logo" width="30" height="24" className="icon"></img></a>
          //     <a href='https://www.instagram.com/felipe_axxedondo/?hl=es' target="_blank" rel="noopener noreferrer"><img src={iglogo} alt="Logo" width="30" height="24" className="icon"></img></a>
          //   </li>            
          //   <li>
           
          //   </li>
          // </ul>
//           {/* Menú desplegable para dispositivos móviles */}
//           <button
//             className="navbar-toggler d-lg-none"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav d-lg-none">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Sobre mi</a>
//               </li>
//               <li className="nav-item">
//                 {/* Enlace para abrir el curriculum en una nueva pestaña */}
//                 <a className="nav-link" href={curriculumPdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Proyectos</a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item" href="#mnemo">mNemo</a></li>
//                   <li><a className="dropdown-item" href="#receptivo">Receptivo Cataratas</a></li>
//                   <li><a className="dropdown-item" href="#flappy">Flappy Bird Clon</a></li>
//                   <li><a className="dropdown-item" href="#hitandjump">Hit and Jump</a></li>
//                   <li><a className="dropdown-item" href="#abogada">Abogada Denise Pastrello</a></li>
//                   <li><a className="dropdown-item" href="#webcode">WebCode Desarrollo web</a></li>
//                   <li><a className="dropdown-item" href="#calculadora">Calculadora</a></li>
//                 </ul>
//               </li>
//               {/* Íconos de redes sociales */}
//               <li className="social-icons">
//                 <a href='https://github.com/felipearredondo08' target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt="Logo" width="30" height="24" className="icon"></img></a>
//                 <a href='https://www.instagram.com/felipe_axxedondo/?hl=es' target="_blank" rel="noopener noreferrer"><img src={iglogo} alt="Logo" width="30" height="24" className="icon"></img></a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Menu;

import React from "react";
import "./Menu.css";
import logo from "../assets/emoji-wink.svg";
import gitlogo from "../assets/github.svg";
import iglogo from "../assets/instagram.svg";
import curriculumPdf from "../assets/curriculumVitaeFelipeArredondo.pdf";

const Menu = ({ toggleDarkMode, darkMode }) => {
  const handleClick = (e) => {
    // Verifica si el elemento clicado es la imagen del menú
    if (e.target.id === "menu-logo") {
      toggleDarkMode();
    }
  };

  return (
    <>
      <nav className={`navbar ${darkMode ? 'dark-menu' : ''}`}>
        <div className="container">
          <div className="menu-content" onClick={handleClick}>
            <a className="navbar-brand" href="#">
              <img
                id="menu-logo" // Agrega un identificador único a la imagen del menú
                src={logo}
                alt="Logo"
                width="30"
                height="24"
                className="logo-img d-inline-block align-text-top"
              />
              <span className="menu-text">Felipe Arredondo</span>
            </a>
          </div>
          <ul id="backgroundbotones"className="nav nav-tabs d-none d-lg-flex">
            <li className="nav-item">
              <a id="sobremidark" className="nav-link active" aria-current="page" href="#container-about">Sobre mi</a>
            </li>
            
            <li className="nav-item">
              <a id="cvdark" className="nav-link active" aria-current="page" href={curriculumPdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
            </li>
            <li className="nav-item">
              <a id="contactoid"className="nav-link" href="#contenedor-contacto">Contacto</a>
            </li>
            <li id="botonproyectosdrop" className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" id="boton-proyectos"><span id="spanproyectos">Proyectos</span></a>
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
            <li className="social-icons">
              <a href='https://github.com/felipearredondo08' target="_blank" rel="noopener noreferrer"><img id="iconoredes1" src={gitlogo} alt="Logo" width="30" height="24" className="icon"></img></a>
              <a href='https://www.instagram.com/felipe_axxedondo/?hl=es' target="_blank" rel="noopener noreferrer"><img id="iconoredes2" src={iglogo} alt="Logo" width="30" height="24" className="icon"></img></a>
            </li>
            <li></li>
          </ul>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span id="hamburguesa" className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-lg-none">
              <li  className="nav-item">
                <a  className="nav-link" href="#container-about">Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={curriculumPdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
              </li>
              <li className="nav-item">
              <a className="nav-link"  href="#contenedor-contacto">Contacto</a>
            </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span id="spanproyectos">Proyectos</span></a>
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