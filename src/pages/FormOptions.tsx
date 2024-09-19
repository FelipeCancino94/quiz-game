import React, { useState } from 'react';
import ModalForm from '../components/ModalForm';
import  BtnBackHome  from '../components/btnBackHome';
import PostQueries from '../Queries/PostQueries';


function FormOptions() {
  
  const IdNumber = [1,2,3,4];

  interface Options {
    id: number,
    is_response: boolean,
    label: string
  }  
  interface Params {
    question:any,
    options:Options[]
  }

  function saveData (){
    const params:Params = {
      question: (document.querySelector('#question') as HTMLInputElement).value,
      options: []
    }

    const allOptionsInput = document.querySelectorAll('.input_option');
    const allRadioOptionsInput = document.querySelectorAll('.input_radio');
    allOptionsInput.forEach((input, index) => {
      if ((input as HTMLInputElement).value !== '') {
        const optionsObject = {
          id: Number(input.getAttribute('id')),
          is_response: (allRadioOptionsInput[index] as HTMLInputElement).checked,
          label: (input as HTMLInputElement).value
        };
        params.options.push(optionsObject);
      }
    });
    console.log(params);
    
    // Post endpoint
    PostQueries(params)
      .then((response) => {
        if (response) {
          // Alejita aca decides que hacer despues de guardar la pregunta
          console.log(`Se registro la pregunta exitosamente con el ID: ${response}`);
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <>
      <div className="form w-full md:w-1/2 m-auto px-5">
        <div>
          <h3 className=" text-emerald-600">Escribe tu pregunta</h3>
          <input name='question' className=" w-full py-1 my-2 rounded-md border-b-4 border-red-500 me-3 bg-slate-50" type="text" id="question"></input>
        </div>
      <div className='opc-answer'>
        {
          IdNumber.map((id) => (
            <div className="flex flex-col ">
              <label htmlFor={`${id }`} className=" text-emerald-600 my-2">Opcion {id}</label>
                <div className='flex flex-row'>
                  <input name={`option_${id }`}  id={`${id }`} key={ `option__${id }`} type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50 input_option'></input>
                  {
                    (id==1? <input type="radio" name='option-radio' className="radio radio-error input_radio" defaultChecked></input>:<input type="radio" name='option-radio' className="radio radio-error input_radio" ></input>)
                  }
                 
                </div>
            </div>
            ))
          }
        </div>  

        <button type='button' onClick={saveData} className="btn btn-outline btn-error mt-3">Enviar</button>
        <ModalForm/>
     
        < BtnBackHome />
      </div>

    </>
  );
}
 



export {FormOptions};
