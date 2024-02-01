import { useEffect, useRef } from "react";
const Modal = ({ open, setOpen }) => {
  const modalRef = useRef();
  useEffect(() => {
    if (open.open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);
  return (
    <dialog ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
