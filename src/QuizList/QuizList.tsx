import React from "react";
import { useState, useEffect } from "react";

function QuizList() {
  const [questions, setQuestions] = useState([]);
  const url = 'http://localhost:8080';

  const parseOptions = () => {
    questions.forEach((question:any) => {
      console.log(JSON.parse(question.options));
    });
  }
  useEffect(() => {
    const getData = async () => {
      try {
        await fetch(`${ url }/api/questions`)
          .then(response => response.json())
          .then(response => {
            /* const data = response;
            data.options = JSON.parse(response.options); */
            setQuestions(response);
            //console.log(response)
          })
          .catch(error => console.error(error));
      } catch (error) {
        console.error('Error al obtener las preguntas: ', error);
      }
    }

    getData();
  }, [])

  return (
    <>
      <h1>QuizList!</h1>
      <ul>
        {
          questions.map((question:any) => (
            <li key={ question.id }>
              <p>Pregunta: { question.question }</p>
              <p>Categoria: { question.question_type }</p>
              <button onClick={ () => { parseOptions() } }>Click here!</button>
            </li>
          )) 
        }
      </ul>
    </>
  )
}

export default QuizList;