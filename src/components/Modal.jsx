import { forwardRef, useRef } from "react";


const Modal = ({closeModal,update,handleSubmit},ref) => {
    const formRef = useRef(null)


    return (
        <dialog ref={ref} className="w-[98%] max-w-[500px] rounded-md">
            <div className="text-right mb-4">
                <button onClick={()=>{
                    closeModal()
                    formRef.current.reset();
                }}>Close</button>
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input 
                className="w-full mb-2 p-2 focus:outline-none border border-slate-200"
                type="text"
                placeholder="title"
                name="title"
                defaultValue={update?.title}
                />

                <input 
                className="w-full mb-2 p-2 focus:outline-none border border-slate-200"
                type="number"
                placeholder="price"
                name="price"
                defaultValue={update?.price}
                />
                <button className="bg-blue-500 text-white p-2 focus:outline-none">
                    Submit
                </button>
            </form>
        </dialog>
    );
};

export default forwardRef(Modal);