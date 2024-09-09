import React from 'react';
import './App.css';
import {Home} from './pages/Home';
import {FormOptions} from './pages/FormOptions';
import {FormTrueFalse} from './pages/FormTrueorFalse';
import QuizList from './QuizList/QuizList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/QuizList' element={<QuizList/>} />
        <Route path='/FormOptions' element={<FormOptions/>}/>
        <Route path='/FormTrueFalse' element={<FormTrueFalse/>}/>
      </Routes>
  </BrowserRouter>
        
    
  );
}

export default App;
