import React from "react";
import { useState, useEffect } from "react";

import GetQueries from "../Queries/GetQueries";
 
function QuizList() {
  /* INTERFACE */
  interface Options {
    id: number,
    is_response: boolean,
    label: string
  }

  interface Question {
    id: string,
    options: Options,
    question: string
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  
  useEffect(() => {
    GetQueries()
      .then((response) => {
        if (response.length > 0) {
          setQuestions(response);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log('End Query!');
      });
  }, [])

  return (
    <>
      <h1>QuizList!</h1>
      <ul>
        {
          questions.map((question:any) => (
            <li key={ question.id }>
              <div className="question" id={ question.id }>
                <h2 className="text-3xl">{ question.question }</h2>
                <ul>
                  {
                    question.options.map((option:any, index:number) => (
                      <li key={ `option__${ option.id }` } id={ option.id }>
                        { index + 1 }. { option.label }
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
          )) 
        }
      </ul>
    </>
  )
}

export default QuizList;