import { Link } from "react-router-dom";
import '../styles/Home.css'
function GameAlert (){
  return (
    <>
    <div className="text-center text-red-500 flex flex-col items-center justify-center h-screen ">
      <div className="w-1/2">
        <h1>Bienvenidos</h1>
        <h2>Al juego de navidad</h2>
        <h3>Pondremos a prueba tus conocimientos generales de la familia y el mundo</h3>
        <p>A la indicacion oprime el boton empezar para comenzar con el juego.</p>
      </div>
      
      <Link to='/GameStart' className="mt-2 btn btn-outline btn-success ">
      comenzar el juego
      </Link>
    </div> 
    
    </> 
    ) 
}

export default GameAlert;