import React, { useState, useRef } from 'react';
import './Contacto.css';
import facelogo from "../assets/facebook.png";
import instalogo from "../assets/instagram.png";
import gitlogo from "../assets/github.png";
import linkedinlogo from "../assets/linkedin.png";
import emailjs from '@emailjs/browser'

const Contacto = ({ darkMode }) => {
    const [colorBoton, setColorBoton] = useState('');
    const [mensajeEnviado, setMensajeEnviado] = useState(false);
    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_z0mphhb";
        const templateId = "template_bsw1l2p";
        const apiKey = "l7TaD5fLm2EclWNmI";
        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then(result => {
                console.log(result.text);
                if (result.text === 'OK') {
                    setColorBoton('lawngreen');
                    setMensajeEnviado(true);
                    setTimeout(() => setMensajeEnviado(false), 2000);
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <div className={`contenedor-contacto ${darkMode ? 'dark-mode' : ''}`}>
                <div className='informacion-contacto'>
                    <h2 id="titulocontacto">Contacto</h2>
                    <h3>Email</h3>
                    <p id="pemail">hellvilleskateshop@gmail.com</p>
                    <h3>Telefono</h3>
                    <p>3537584682</p>
                    <h3>Redes Sociales</h3>
                    <div className="iconos-redes">
                        <a href='https://www.facebook.com/profile.php?id=100009038324340' target="_blank" rel="noopener noreferrer"><img src={facelogo} alt="Logo" className="icon-contact"></img></a>
                        <a href='https://www.instagram.com/felipe_axxedondo/?hl=es' target="_blank" rel="noopener noreferrer"><img src={instalogo} alt="Logo" className="icon-contact"></img></a>
                        <a href='https://github.com/felipearredondo08' target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt="Logo" className="icon-contact"></img></a>
                        <a href='https://www.linkedin.com/in/felipe-arredondo-641231268/' target="_blank" rel="noopener noreferrer"><img src={linkedinlogo} alt="Logo" className="icon-contact"></img></a>
                    </div>
                </div>

                <form ref={refForm} onSubmit={handleSubmit} className="formulario-contacto">
                    <h2 id="Titulo-form">Enviar mensaje</h2>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        name="username"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        required
                    />

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        maxLength="1000"
                        name="message"
                        cols="30"
                        rows="50"
                        required
                    ></textarea>

                    <button className="ov-btn-slide-left" style={{ backgroundColor: colorBoton }} type="submit">Enviar</button>
                    {mensajeEnviado && <p className="mensaje-enviado">Mensaje enviado</p>}
                </form>
            </div>
        </>
    );
};

export default Contacto;