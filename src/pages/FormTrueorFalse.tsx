import React from "react";
import { CreateQuestion } from '../components/CreateQuestions';
import { Link } from "react-router-dom";
import ModalForm from "../components/ModalForm";

function FormTrueFalse (){
    return (
        <>
        <form className="form w-full md:w-1/2 m-auto px-5">
          <h1 className="text-center text-xl my-9 font-bold text-emerald-600"> Ingresa la pregunta</h1>
          <CreateQuestion/>
          <div className="form-control">
            <label className="label cursor-pointer w-11">
              <span className="label-text">Verdadero</span>
              <input type="radio" name="radio-10" className="radio checked:bg-green-700 ms-4" defaultChecked />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer w-11">
              <span className="label-text ">Falso</span>
              <input type="radio" name="radio-10" className="radio  checked:bg-red-500 ms-4" defaultChecked />
            </label>
          </div>
          <button className="btn btn-outline btn-error mt-3">Enviar</button>
          <Link to="/"  className="btn btn-outline btn-error mt-3">Volver al inicio</Link >
        </form>
        </>
    )
}

export {FormTrueFalse};
