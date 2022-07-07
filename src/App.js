import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

let name = "Amrit";
function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'StringUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'StringUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install StringUtils now!'
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'StringUtils - Home'
    }
  }
  return (
    <>
      {/* <Navbar title="StringUtils" aboutText="About"/>
      <Navbar/> */}
      <Router>
      <Navbar title="StringUtils" mode={mode} toggleMode={toggleMode} alert={alert}/>
      <Alert alert={alert} />
      <div className="container my-3">
          
          <Routes>
            <Route exact path="/about"
              element={<About />}
            />
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Enter a Text to analyze" mode={mode}  toggleMode={toggleMode}/>}
            />
          </Routes>
        {/* <About /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
