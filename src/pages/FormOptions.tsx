import React, { useState } from 'react';
import { CreateAnswer } from '../components/CreateAnswer';
import {Link} from 'react-router-dom';
import { ModalFormOpt } from '../components/ModalFormOpt';
import { CreateQuestion } from '../components/CreateQuestions';

function FormOptions() {
  
  const IdNumber = [1,2,3,4];

 

  return (
    <>
      <div className="form w-full md:w-1/2 m-auto px-5">
      <div>
        <h3 className=" text-emerald-600">Escribe tu pregunta</h3>
        <input name='question' className=" w-full py-1 my-2 rounded-md border-b-4 border-red-500 me-3 bg-slate-50" type="text" ></input>
    </div>
        <div className='opc-answer'>
          {
            IdNumber.map((id) => (
              <div className="flex flex-col ">
              <label htmlFor={`${id }`} className=" text-emerald-600 my-2">Opcion {id}</label>
                <div className='flex flex-row'>
                  <input name={`option_${id }`}  id={`${id }`} key={ `option__${id }`} type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
                  <input type="radio" className="radio radio-error" ></input>
                </div>
            </div>
            ))
          }
        </div>  
        <button type='button' className="btn btn-outline btn-error mt-3">Enviar</button>
        <Link to="/"  className="btn btn-outline btn-error m-3">Volver al inicio</Link >
      </div>

    </>
  );
}
 



export {FormOptions};
