 import "./ModalForm.css";
 import BtnBackHome from "./btnBackHome";

 const ModalForm = ({children}:any) => {
  return (
      <>
        <dialog className="">
         <div className="modal-container">
          <BtnBackHome/>
         <button>x</button>
          {children}
         </div>
      </dialog>
    </>
  )
}
export default ModalForm;