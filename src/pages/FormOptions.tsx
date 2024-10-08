import React, { useState } from 'react';
import ModalForm from '../components/ModalForm';
import BtnBackHome  from '../components/btnBackHome';
import { useModal } from '../hooks/useModal';
import { useLocation } from 'react-router-dom';




function FormOptions() {
  const location = useLocation();
  const {typeForm}= location.state;
  console.log(typeForm);
  const IdNumber = [1,2,3,4];

  interface Options {
    id: number,
    is_response: boolean,
    label: string
  }  
  interface Params {
    question:string,
    options:Options[]
  }

  const [isOpen, openModal, closeModal]= useModal(false);
  const [question, setQuestion] = useState (Object);

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
        setQuestion(params);
      }
    });
    
  }

  return (
    <>
      <div className="form w-full md:w-1/2 m-auto p-14 bg-slate-100 h-full">
        <div>
          <h3 className=" text-emerald-600 text-xl">Escribe tu pregunta</h3>
          <input name='question' className="text-black w-full py-1.5 my-2 rounded-md border-b-2 border-rose-500 me-3" type="text" id="question"></input>
        </div>
      <div className='opc-answer'>
        {
          typeForm === "trueFalse" ? 
          <div>
            <input type="radio" name='option-radio' id='false' className="radio radio-warning input_radio" defaultChecked>Verdadero</input>
            <input type="radio" name='option-radio' id='true' className="radio radio-warning input_radio" defaultChecked>Verdadero</input>:
          </div>
          :
         IdNumber.map((id) => (
            <div className="flex flex-col " key={ `option__${id }`}>
              <label htmlFor={`${id }`} className=" text-emerald-600 my-2">Opcion {id}</label>
              
                <div className='flex flex-row'>
                  <input name={`option_${id }`}  id={`${id }`} key={ `option__${id }`} type="text" className='text-black w-4/5 border-b-2 border-rose-500 me-14 py-1 rounded-md  input_option'></input>
                  {
                    (id==1? <input type="radio" name='option-radio' className="radio radio-warning input_radio" defaultChecked></input>:<input type="radio" name='option-radio' className="radio radio-warning input_radio" ></input>)
                  }
                 
                </div>
            </div>
            ))
        }
        </div>  
        <button type='button' className="btn text-white btn-warning mt-3" onClick={()=> {
          openModal();
          saveData(); 
        }} >
          Enviar
      </button>
        < BtnBackHome />
      </div>
      <ModalForm isOpen = {isOpen} closeModal={closeModal} params={question}>
        <h2>Resumen de tu pregunta</h2>
        <p>Tu pregunta es: {question.question} </p>
        <div>
          {question.options && question.options.map((option:any, index:number) => (
             <p key={index}>
               {option.is_response ?`La respuesta correcta es ${index + 1}: ${option.label}`:
                 `La opcion ${index + 1} es: ${option.label}`}</p>
              ))}
       </div> 
      </ModalForm>
    </>
  );
}
 

export {FormOptions};
