import {useState, useEffect} from "react";
import GetQueries from "../Queries/GetQueries";
import '../styles/GameStart.css';

function GameStart(){

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
  
  const [indexQuestion, setIndexQuestion ] = useState(0);
  const nextQuestion = () => {
    setIndexQuestion (prevIndex => {
      return prevIndex > questions.length ? prevIndex : prevIndex+ 1 ;
    });
  };

  
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

  return(
    <>
      <section className="w-screen md:w-1/2 mx-auto">
        <h2 className="text-center font-title my-3 text-4xl text-red-600">Juego de navidad</h2>
       
        <div>
     {  questions.length > 0 && (
        <div className="question" id={ questions[indexQuestion].id } key={ questions[indexQuestion].id }>
          <h2 className="text-center font-content py-3">{ questions[indexQuestion].question }</h2>
        </div>  
      )}   
      <div className="w-screen grid grid-cols-2 gap-3 items-center justify-center">
        {
          questions.length > 0 && Array.isArray(questions[indexQuestion].options) && questions[indexQuestion].options.map((option:any, index:number) => (
           
            <span key={ `option__${option.id}` } id={ option.id } className={`box-item-${index} border  h-40 w-40 flex justify-center items-center text-xl`}>
              <p className="hidden md:flex ">
                { option.label }
              </p>
               
            
            </span>
          ))
          
        }
      </div>
           

      
      </div>

      </section>
    </>
  )
}
export default GameStart;