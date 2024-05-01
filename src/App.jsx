import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Portada from './components/Portada';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import wspico from './assets/whatsapp.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <a href="http://api.whatsapp.com/send?phone=543537584682" className="btn-wsp" target="_blank">
        <i className="icon-whatsapp"><img src={wspico} alt="Logo" className="icon-wsp"></img></i>
      </a>
      <Menu toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Portada darkMode={darkMode}/>
      <SobreMi darkMode={darkMode}/>
      <Proyectos darkMode={darkMode}/>
      <Contacto darkMode={darkMode}/>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;