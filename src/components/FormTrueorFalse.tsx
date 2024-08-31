import React from "react";

function FormTrueFalse (){
    return (
        <>
        <form className="form w-full md:w-1/2 m-auto px-5">
          <h1 className="text-center text-xl my-9 font-bold text-emerald-600"> Ingresa la pregunta</h1>
          <h3 className=" text-emerald-600">Escribe tu pregunta</h3>
          <input name='question' className=" w-full py-1 my-2 rounded-md border-b-4 border-red-500 me-3 bg-slate-50" type="text" ></input>
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
        </form>
        </>
    )
}

export default FormTrueFalse;