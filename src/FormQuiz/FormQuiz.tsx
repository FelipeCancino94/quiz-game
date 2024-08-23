import React from 'react';

function FormQuiz() {
  return (
    <>
      <section className="w-full md:w-1/2 m-auto px-5">
        <h1 className="text-center my-9 font-bold text-emerald-600"> Ingresa la pregunta</h1>
        <div className="crear-pregunta">
          <h3 className=" text-emerald-600">Escribe tu pregunta</h3>
          <input className=" w-full py-1 my-2 rounded-md border-b-4 border-red-500 me-3 bg-slate-50" type="text" ></input>
          <div className="flex flex-col ">
            <label htmlFor="Respuesta1" className=" text-emerald-600 my-2">Opcion 1</label>
            <div className='flex flex-row'>
              <input id='Respuesta1' type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
              <input type="radio" defaultChecked className="radio radio-error" ></input>
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="Respuesta2" className=" text-emerald-600 my-2">Opcion 2</label>
            <div className='flex flex-row'>
              <input id='Respuesta2' type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
              <input type="radio" className="radio radio-error" ></input>
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="Respuesta3" className=" text-emerald-600 my-2">Opcion 3</label>
            <div className='flex flex-row'>
              <input id='Respuesta3' type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
              <input type="radio" className="radio radio-error" ></input>
            </div>
          </div>
        </div>
        <button className="btn btn-outline btn-error">Error</button>
        
      </section>
    </>
  )
}

export default FormQuiz;