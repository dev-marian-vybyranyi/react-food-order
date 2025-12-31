import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose, className = "" }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }

    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
