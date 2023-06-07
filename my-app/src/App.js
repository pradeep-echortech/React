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
import Alert from "./Components/Alert";


function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#272b53'
      document.title = 'Text Utils - Dark mode '
      showAlert(': Darkmode had been Enabled','success ')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Utils - light mode '
      showAlert(': Lightmode had been Enabled','success ')
    }
  }
  return (
    <>
      <Router>
        <Navbar title='React' aboutus='About react' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={
              <TextForm heading='Enter Your Text Here' mode={mode} /> }/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
