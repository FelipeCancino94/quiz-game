import React from 'react';
import { useState } from 'react';

function FormOptions() {
const [values, setValues] = useState ({
  question:String,
  opc1:String,
  opc2:String,
  opc3:String,
});

  return (
    <>
      <form className="form w-full md:w-1/2 m-auto px-5">
        <h1 className="text-center text-xl my-9 font-bold text-emerald-600"> Ingresa la pregunta</h1>
        <div className="creat-question">
          <h3 className=" text-emerald-600">Escribe tu pregunta</h3>
          <input name='question' className=" w-full py-1 my-2 rounded-md border-b-4 border-red-500 me-3 bg-slate-50" type="text" ></input>
        <div className='opc-answer'></div>
          <div className="flex flex-col ">
            <label htmlFor="answer1" className=" text-emerald-600 my-2">Opcion 1</label>
            <div className='flex flex-row'>
              <input name='opc1' id='answer1' type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
              <input type="radio" defaultChecked className="radio radio-error" ></input>
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="answer2" className=" text-emerald-600 my-2">Opcion 2</label>
            <div className='flex flex-row'>
              <input name='opc2' id='answer2' type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
              <input type="radio" className="radio radio-error" ></input>
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="answer3" className=" text-emerald-600 my-2">Opcion 3</label>
            <div className='flex flex-row'>
              <input name='opc3' id='answer3' type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
              <input type="radio" className="radio radio-error" ></input>
            </div>
          </div>
        </div>
        <button className="btn btn-outline btn-error mt-3">Enviar</button>
      </form>
    </>
  )
}

export default FormOptions;