import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import FormOptions from './components/FormOptions';
import FormTrue from './components/FormTrueorFalse';
import Home from './components/Home1';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
     
    </Router>
    
  );
}

export default App;
