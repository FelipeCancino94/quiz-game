import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Home.css'
import QuizList from "../QuizList/QuizList";

function Home () {
    
  return (
    <>
      <div className= "hero container-page bg-contain bg-no-repeat min-h-screen bg-center">
        <div className="hero-content ">
         <div className="flex w-full ">
            <Link  to="/GameAlert" className="shadow-inner text-red-600  bg-slate-100 px-4 rounded-box grid h-20 flex-grow place-items-center">
                Jugar
            </Link>
            <div className="divider divider-horizontal"></div>
            <div tabIndex={0} role="button"  className="dropdown text-green-600 dropdown-top bg-slate-100 px-4 rounded-box grid flex-grow place-items-center">
                Crear pregunta
                <ul tabIndex={0} className="dropdown-content  menu bg-white rounded-box z-[1] w-auto mb-1 shadow">
                    <li><Link to="/FormOptions"  state={{ typeForm: "option" }} >Pregunta de opcion multiple</Link></li>
                    <li><Link to="/FormOptions" state={{ typeForm: "trueFalse" }}>Pregunta verdadero o falso</Link></li>
                  </ul>
            </div>
          </div>
        </div>
      </div>    
    </> 
  )
    
}

export {Home};