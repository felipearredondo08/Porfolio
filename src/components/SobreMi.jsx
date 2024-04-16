import React from "react";
import "./SobreMi.css";
import htmllogo from "../assets/html-5.png";
import csslogo from "../assets/css-3.png";
import jslogo from "../assets/js.png";
import reactlogo from "../assets/reactlogo.png";
import sqllogo from "../assets/sql.png";
import wplogo from "../assets/wordpress.png"
import phplogo from "../assets/php.png"
import gitlogo from "../assets/github.png"
import bootstraplogo from "../assets/bootstrap.png"
import clogo from "../assets/c-.png"
import unitylogo from "../assets/unity.png"

const SobreMi = () => {
    return (
        <>
            <div className="container-about" id="container-about">
                <h2 className="subtitulos">Sobre mi</h2>
                <p className="descripcion">   Mi nombre es Felipe Arredondo, me dedico al desarrollo de aplicaciones web desde hace 5 años. 
                Realize mis estudios en la Tecnicatura Superior en Desarrollo de Software del "Instituto Ramon Carrillo". Habiendo terminado 
                el cursado, orienté mis estudios al desarrollo de sistemas web y aun continuo mi formación en dicha área.<br></br>   Entre los lenguajes y tecnologías en los que me capacité se encuentran HTML5, CSS, Javascript,  React, WordPress, SQL , Bootstrap, PHP, GIT, C++ y Unity.</p>
                <div className="container-iconos">
                    <img src={htmllogo} alt="Logo" className="icon-about"></img>
                    <img src={csslogo} alt="Logo" className="icon-about"></img>
                    <img src={jslogo} alt="Logo" className="icon-about"></img>
                    <img src={reactlogo} alt="Logo" className="icon-about"></img>
                    <img src={sqllogo} alt="Logo" className="icon-about"></img>
                    <img src={wplogo} alt="Logo" className="icon-about"></img>
                    <img src={phplogo} alt="Logo" className="icon-about"></img>
                    <img src={gitlogo} alt="Logo" className="icon-about"></img>
                    <img src={bootstraplogo} alt="Logo" className="icon-about"></img>
                    <img src={clogo} alt="Logo" className="icon-about"></img>
                    <img src={unitylogo} alt="Logo" className="icon-about"></img>


                </div>

            </div>
        </>
    )
}

export default SobreMi
