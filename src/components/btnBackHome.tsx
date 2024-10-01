import React from "react";
import {Link} from 'react-router-dom';

function BtnBackHome (){
  return (
    <>
      <Link to="/" className="btn text-white btn-warning m-3">Volver al inicio</Link >
    </> 
  )
    
}
export default BtnBackHome;