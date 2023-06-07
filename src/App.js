// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#272b53'
      document.title = 'Text Utils - Dark mode '
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Utils - light mode '
    }
  }
  return (
    <>
      <Router>
        <Navbar title='React' aboutus='About react' mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={
              <TextForm heading='Enter Your Text Here' mode={mode} /> }/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
