 import React, { useState } from "react";
 import "./ModalForm.css";
 import { Link } from "react-router-dom";




function ModalForm ({children, isOpen, closeModal}:any){


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