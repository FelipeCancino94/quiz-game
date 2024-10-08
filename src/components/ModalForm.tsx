 import React from "react";
 import "./ModalForm.css";
 import { Link } from "react-router-dom";
import PostQueries from "../Queries/PostQueries";




function ModalForm ({children, isOpen, closeModal,params}:any){

  return (
    <>
      {
        <article className="bg-slate-400 max-h-screen w-screen">
          <div className={`modal-options ${isOpen ? "is-open" : " "}`} >
            <div className="modal-container">
            {children}
           
              <div className="flex">
              <Link to="/FormOptions" type='button ' className="modal-close btn btn-outline btn-error m-3" onClick={()=>{
              closeModal();
                }}> 
              Corregir preguntas
             </Link>
              <Link to="/FormOptions" type='button' className="btn btn-outline btn-error m-3" onClick={()=>{
               closeModal();
                const inputs = document.querySelectorAll('input');
                inputs.forEach((input)=> input.value = "")
                PostQueries(params)
                .then((response) => {
                  if (response) {
                    // Alejita aca decides que hacer despues de guardar la pregunta
                    alert(`Se registro la pregunta exitosamente`);
                  }
                })
                .catch((error) => {
                  console.error(error);
                })
               }}>
               Enviar
             </Link> 
            </div>
             </div>
          
          
          
          </div>
          
        </article>
          
      }
    </>
  )
}
export default ModalForm;