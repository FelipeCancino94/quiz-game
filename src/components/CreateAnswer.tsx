function CreateAnswer ({id}:any){

  return (
      <>
    <div className="flex flex-col ">
      <label htmlFor={id} className=" text-emerald-600 my-2">Opcion {id}</label>
        <div className='flex flex-row'>
          <input name='opc1' id={id} key={id} type="text" className='w-4/5 border-orange-200 me-14 py-1 rounded-md border-b-4 bg-slate-50'></input>
          <input type="radio" className="radio radio-error" ></input>
        </div>
    </div>
    </>
  )
  
}
export {CreateAnswer}