import React from 'react';
import './App.css';

import FormQuiz from './FormQuiz/FormQuiz';
import QuizList from './QuizList/QuizList';

function App() {
  return (
    <div className="App">
      <FormQuiz />
      <QuizList />
    </div>
  );
}

export default App;
