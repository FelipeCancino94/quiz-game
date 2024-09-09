import React, { useState } from "react";

function CreateQuestion (){
    const [formData, setFormData] = useState({
        question: '',
      });
   return (
    <>
    <div>
        <h3 className=" text-emerald-600">Escribe tu pregunta</h3>
        <input name='question' value={formData.question} className=" w-full py-1 my-2 rounded-md border-b-4 border-red-500 me-3 bg-slate-50" type="text" ></input>
    </div>

    </>
   )
}
export {CreateQuestion} ;