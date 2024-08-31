import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import FormOptions from './components/FormOptions';
import FormTrue from './components/FormTrueorFalse';
import Home from './components/Home1';
import QuizList from './QuizList/QuizList';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <QuizList />
      </div>
     
    </Router>
    
  );
}

export default App;
