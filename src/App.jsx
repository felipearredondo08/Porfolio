import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Portada from './components/Portada';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
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