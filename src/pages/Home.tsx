import React from "react";
import {Link} from 'react-router-dom';
import QuizList from "../QuizList/QuizList";

function Home () {
    
    return (
       <>
         <div className="hero min-h-screen bg-center"
        style={{
            backgroundImage: "url(https://www.solofondos.com/wp-content/uploads/2017/12/fondos-de-pantalla-3d-con-movimiento-de-navidad-gratis.gif)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
        <div className="flex w-full">
            <div className="card text-red-600  bg-slate-100 px-4 rounded-box grid h-20 flex-grow place-items-center">
                Comenzar a Jugar
            </div>
            <div className="divider divider-horizontal">O</div>
            <div tabIndex={0} role="button"  className="dropdown  text-green-600 dropdown-top bg-slate-100 px-4 rounded-box grid flex-grow place-items-center">
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