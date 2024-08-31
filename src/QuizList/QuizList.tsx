import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from '../connections/fbConnect.js';
 
function QuizList() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const questionsRef = collection(db, 'quiz_questions');
    const getData = async () => {
      const querySnapshot:any = await getDocs(questionsRef);
      const data:any = querySnapshot.docs.map((doc:any) => ({ ...doc.data(), id: doc.id }));
      setQuestions(data);
      console.log(data);
    };

    getData();
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