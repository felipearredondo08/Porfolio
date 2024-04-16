// import React from "react";
// import "./Proyectos.css";
// import mnemo from "../assets/mnemo.png";
// import cataratas from "../assets/cataratas.png";
// import reactlogo from "../assets/react.svg";
// import webcode from "../assets/webcode.png";
// import abogada from "../assets/abogada.png";
// import calculadora from "../assets/calculadora.png";
// import flappyVideo from "../assets/flappy.mp4";


// const Proyectos = () => {

//     const mostrarVideo = () => {
//         const video = document.getElementById('videoFlappy');
//         video.removeAttribute('hidden');
//         video.play();
//     };

//     return (
//         <>
//             <div className="proyectos-container">
//                 <h2 id="titulo-proyectos">Proyectos</h2>

//                 <div className="contenedor-tarjetas">
                    // <article className="cta">
                    //     <img src={mnemo} alt="mNEMO"></img>
                    //     <div className="cta__text-column">
                    //         <h2>mNEMO</h2>
                    //         <p>Proyecto desarrollado en REACT cuya función es ser un anotador de tareas a cumplir.</p>
                    //         <p className="lenguajes">Desarrollado en: React Vite.</p>
                    //         <a className="irAWeb" href="https://661a83ed8aae174004a61a22--cute-dragon-57c927.netlify.app/">Ir a la web</a>
                    //     </div>
                    // </article>


                    // <article className="cta">
                    //     <img src={cataratas} alt='Small blue-grey yellow-breasted bird'></img>
                    //     <div className="cta__text-column">
                    //         <h2>Receptivo Cataratas</h2>
                    //         <p>Proyecto desarrollado en WordPress para la empresa Receptivo Cataratas.</p>
                    //         <p className="lenguajes">Desarrollado en: WordPress.</p>
                    //         <a className="irAWeb" href="https://www.receptivocataratas.com">Ir a la web</a>
                    //     </div>
                    // </article>

                    // <article className="cta">
                    //     <img src={webcode} alt='Small blue-grey yellow-breasted bird'></img>
                    //     <div className="cta__text-column">
                    //         <h2>WebCode Desarrollo Web</h2>
                    //         <p>Proyecto desarrollado en el curso Argentina Programa 4.0 - Desarrollo web Full Stack.</p>
                    //         <p className="lenguajes">Desarrollado en: html, css, Javascript.</p>
                    //         <a className="irAWeb" href="https://661ae0a9b70e8bd1d5959dbe--profound-croquembouche-a522ab.netlify.app/">Ir a la web</a>
                    //     </div>
                    // </article>

                    // <article className="cta">
                    //     <img src={abogada} alt='Small blue-grey yellow-breasted bird'></img>
                    //     <div className="cta__text-column">
                    //         <h2>Abogada Denise Pastrello</h2>
                    //         <p>Proyecto desarrollado en WordPress para estudio juridico.</p>
                    //         <p className="lenguajes">Desarrollado en: WordPress.</p>
                    //         <a className="irAWeb" href="https://abogadadenisepastrello.com/">Ir a la web</a>
                    //     </div>
                    // </article>

                    // <article className="cta">
                    //     <img src={calculadora} alt='Small blue-grey yellow-breasted bird'></img>
                    //     <div className="cta__text-column">
                    //         <h2>Calculadora</h2>
                    //         <p>Proyecto desarrollado como practica de JS.</p>
                    //         <p className="lenguajes">Desarrollado en: Html5, Css3 y Javascript </p>
                    //         <a className="irAWeb" href="https://661c459d7b4a5ebc0a310a4b--splendid-arithmetic-1d9605.netlify.app/">Ir a la web</a>
                    //     </div>
                    // </article>

                    // <article className="cta">
                    //     <img src={webcode} alt='Small blue-grey yellow-breasted bird'></img>
                    //     <div className="cta__text-column">
                    //         <h2>WebCode Desarrollo Web</h2>
                    //         <p>Proyecto desarrollado en el curso Codo a Codo - PHP Full Stack.</p>
                    //         <p className="lenguajes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    //         <a className="irAWeb" href="https://661ae0a9b70e8bd1d5959dbe--profound-croquembouche-a522ab.netlify.app/">Ir a la web</a>
                    //     </div>
                    // </article>

                    // <article className="cta">
                    //     <img src={cataratas} alt='Small blue-grey yellow-breasted bird' />
                    //     <div className="cta__text-column">
                    //         <h2>Receptivo Cataratas</h2>
                    //         <p>Proyecto desarrollado en WordPress para la empresa Receptivo Cataratas.</p>
                    //         <p className="lenguajes">Desarrollado en: WordPress.</p>
                    //         <a className="irAWeb" onClick={mostrarVideo}>Ir a la web</a>
                    //     </div>
                    // </article>

//                     <video id="videoFlappy" controls hidden>
//                     <source src={flappyVideo} type="video/mp4" />
//                     Tu navegador no soporta el elemento de video.
//                 </video>


//                 </div>

//             </div>
//         </>
//     )
// }

// export default Proyectos


// a partir de aqui es el codigo nuevo ------------------------------------------------------------------------

import React, { useState } from "react";
import Modal from "react-modal";
import "./Proyectos.css";
import mnemo from "../assets/mnemo.png";
import cataratas from "../assets/cataratas.png";
import webcode from "../assets/webcode.png";
import abogada from "../assets/abogada.png";
import calculadora from "../assets/calculadora.png";
import flappyVideo from "../assets/flappy.mp4";
import flappy from "../assets/flappy-bird-screenshot.png";
import hitandjumpVideo from "../assets/hitandjump.mp4";
import hitandjump from "../assets/hitandjump.png"

Modal.setAppElement('#root');

const Proyectos = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(flappyVideo);

    const openModal = (video) => {
        setSelectedVideo(video);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="proyectos-container">
                <h2 id="titulo-proyectos">Proyectos</h2>

                <div className="contenedor-tarjetas">

                <article className="cta" id="mnemo">
                        <img src={mnemo} alt="mNEMO" />
                        <div className="cta__text-column">
                            <h2>mNEMO</h2>
                            <p>Proyecto desarrollado en REACT cuya función es ser un anotador de tareas a cumplir.</p>
                            <p className="lenguajes">Desarrollado en: React Vite.</p>
                            <a className="irAWeba" href="https://661a83ed8aae174004a61a22--cute-dragon-57c927.netlify.app/">Ir a la web</a>
                        </div>
                    </article>

                    <article className="cta" id="receptivo">
                        <img src={cataratas} alt='Small blue-grey yellow-breasted bird'></img>
                        <div className="cta__text-column">
                            <h2>Receptivo Cataratas</h2>
                            <p>Proyecto desarrollado en WordPress para la empresa Receptivo Cataratas.</p>
                            <p className="lenguajes">Desarrollado en: WordPress.</p>
                            <a className="irAWeba" href="https://www.receptivocataratas.com">Ir a la web</a>
                        </div>
                    </article>
                    
                    <article className="cta" id="flappy">
                        <img src={flappy} alt='Small blue-grey yellow-breasted bird' />
                        <div className="cta__text-column">
                            <h2>Flappy Bird Clon</h2>
                            <p>Proyecto desarrollado en Unity.</p>
                            <p className="lenguajes">Desarrollado en: Unity.</p>
                            <button className="irAWeb" onClick={() => openModal(flappyVideo)}>Ver Video</button>
                        </div>
                    </article>

                    <article className="cta" id="hitandjump">
                        <img src={hitandjump} alt='Small blue-grey yellow-breasted bird' />
                        <div className="cta__text-column">
                            <h2>Hit and Jump</h2>
                            <p>Proyecto desarrollado Unity.</p>
                            <p className="lenguajes">Desarrollado en: Unity.</p>
                            <button className="irAWeb" onClick={() => openModal(hitandjumpVideo)}>Ver Video</button>
                        </div>
                    </article>



                    <article className="cta" id="abogada">
                        <img src={abogada} alt='Small blue-grey yellow-breasted bird'></img>
                        <div className="cta__text-column">
                            <h2>Abogada Denise Pastrello</h2>
                            <p>Proyecto desarrollado en WordPress para estudio juridico.</p>
                            <p className="lenguajes">Desarrollado en: WordPress.</p>
                            <a className="irAWeb" href="https://abogadadenisepastrello.com/">Ir a la web</a>
                        </div>
                    </article>
              

              

            

                    <article className="cta" id="webcode">
                        <img src={webcode} alt='Small blue-grey yellow-breasted bird'></img>
                        <div className="cta__text-column">
                            <h2>WebCode Desarrollo Web</h2>
                            <p>Proyecto desarrollado en el curso Codo a Codo - PHP Full Stack.</p>
                            <p className="lenguajes">Desarrollado en: Html, Css3 y Javascript.</p>
                            <a className="irAWeb" href="https://661ae0a9b70e8bd1d5959dbe--profound-croquembouche-a522ab.netlify.app/">Ir a la web</a>
                        </div>
                    </article>

                    <article className="cta" id="calculadora">
                        <img src={calculadora} alt='Small blue-grey yellow-breasted bird'></img>
                        <div className="cta__text-column">
                            <h2>Calculadora</h2>
                            <p>Proyecto desarrollado como practica de JS.</p>
                            <p className="lenguajes">Desarrollado en: Html5, Css3 y Javascript </p>
                            <a className="irAWeb" href="https://661c459d7b4a5ebc0a310a4b--splendid-arithmetic-1d9605.netlify.app/">Ir a la web</a>
                        </div>
                    </article>

                    


                   

                


                  

                   

                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Video Modal"
                >
                    <button id="boton-modal" onClick={closeModal}>Cerrar</button>
                    <video className="modal-video" controls>
                        <source src={selectedVideo} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </Modal>
                
            </div>
        </>
    )
}

export default Proyectos;