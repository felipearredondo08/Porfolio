import React, { useState , useRef} from 'react';
import './Contacto.css';
import facelogo from "../assets/facebook.png";
import instalogo from "../assets/instagram.png";
import gitlogo from "../assets/github.png";
import linkedinlogo from "../assets/linkedin.png";
import emailjs from '@emailjs/browser'

const Contacto = ({ darkMode }) => {
    // const [nombre, setNombre] = useState('');
    // const [email, setEmail] = useState('');
    // const [mensaje, setMensaje] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();


        // intento de formulario con emailJs
        const refForm = useRef ();

        const handleSubmit = (event) => {
            event.preventDefault();
            

            const servideId = "service_z0mphhb";
            const templateId = "template_bsw1l2p";
            const apiKey = "l7TaD5fLm2EclWNmI";
            emailjs.sendForm(servideId, templateId , refForm.current, apiKey)
            .then( result => console.log(result.text))
            .catch( error => console.error(error))
        };


        // intento de formulario con chatgpt
        // try {
        //     const response = await fetch('/enviar_formulario', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ nombre, email, mensaje }),
        //     });

        //     if (response.ok) {
        //         alert('Correo enviado correctamente');
        //         // Restablecer el formulario después de enviar
        //         setNombre('');
        //         setEmail('');
        //         setMensaje('');
        //     } else {
        //         alert('Error al enviar el correo');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     alert('Hubo un error al enviar el formulario');
        // }
    // };

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
            
                <form ref={refForm} action="" onSubmit={handleSubmit} className="formulario-contacto">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"                        
                        name="username"                   
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"                        
                        name="email"                                           
                        required
                    />

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        maxLength="500"
                        name="message"
                        id=""
                        cols="30"
                        rows="50"
                        
                       
                        
                        required
                    ></textarea>

                    <button className="ov-btn-slide-left" type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
};

export default Contacto;