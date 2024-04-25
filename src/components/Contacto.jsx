import React, { useState } from 'react';
import './Contacto.css';
import facelogo from "../assets/facebook.png";
import instalogo from "../assets/instagram.png";
import gitlogo from "../assets/github.png";
import linkedinlogo from "../assets/linkedin.png";

const Contacto = ({ darkMode }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/enviar_formulario', { // Ajuste aquí
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, mensaje }),
            });

            if (response.ok) {
                alert('Correo enviado correctamente');
                // Restablecer el formulario después de enviar
                setNombre('');
                setEmail('');
                setMensaje('');
            } else {
                alert('Error al enviar el correo');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario');
        }
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
            
                <form onSubmit={handleSubmit} className="formulario-contacto">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                    ></textarea>

                    <button className="ov-btn-slide-left" type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
};

export default Contacto;

{/* <a href="#" className="ov-btn-slide-left" onClick={handleSubmit}>Enviar</a> */}