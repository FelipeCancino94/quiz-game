import React from "react";
import { CreateQuestion } from '../components/CreateQuestions';
import { Link } from "react-router-dom";
import ModalForm from "../components/ModalForm";

function FormTrueFalse (){
    return (
        <>
        <form className="form w-full md:w-1/2 m-auto px-5">
          <h1 className="text-center text-xl my-9 font-bold text-emerald-600"> Ingresa la pregunta</h1>
          <div>
            <h3 className=" text-emerald-600">Escribe tu pregunta</h3>
            <input name='question' id="question" className=" w-full py-1 my-2 rounded-md border-b-4 border-red-500 me-3 bg-slate-50" type="text" ></input>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer w-11">
              <span className="label-text">Verdadero</span>
              <input type="radio" name="radio" className="radio checked:bg-green-700 ms-4" defaultChecked />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer w-11">
              <span className="label-text ">Falso</span>
              <input type="radio" name="radio" className="radio  checked:bg-red-500 ms-4" />
            </label>
          </div>
          <button className="btn btn-outline btn-error mt-3">Enviar</button>
          <Link to="/"  className="btn btn-outline btn-error mt-3">Volver al inicio</Link >
        </form>
        </>
    )
}

export {FormTrueFalse};
