import { Link } from "react-router-dom";
import '../styles/Home.css'
function GameAlert (){
  return (
    <>
    <div className="text-center text-red-500 m-10 flex flex-wrap h-dvh ">
      <div>
        <h1>Bienvenidos</h1>
        <h2>Al juego de navidad</h2>
        <h3>Pondremos a prueba tus conocimientos generales de la familia y el mundo</h3>
        <p>A la indicacion oprime el boton empezar para comenzar con el juego.</p>
      </div>
      
      <Link to='./GameStart' className="btn btn-outline btn-success mt-10">
      comenzar el juego
      </Link>
    </div> 
    
    </> 
    ) 
}

export default GameAlert;