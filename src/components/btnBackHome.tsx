import React from "react";
import {Link} from 'react-router-dom';

function BtnBackHome (){
  return (
    <>
      <Link to="/"  className="btn btn-outline btn-error m-3">Volver al inicio</Link >

    </> 
  )
    
}
export default BtnBackHome;