import React from 'react';
import './App.css';
import {Home} from './pages/Home';
import {FormOptions} from './pages/FormOptions';
import GameAlert from './pages/GameAlert';
import GameStart from './pages/GameStart';
import QuizList from './QuizList/QuizList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/QuizList' element={<QuizList/>} />
        <Route path='/FormOptions' element={<FormOptions/>}/>
        <Route path='/GameAlert' element={<GameAlert/>}/>
        <Route path='/GameStart' element={<GameStart/>}/>

      </Routes>
  </BrowserRouter>
        
    
  );
}

export default App;
