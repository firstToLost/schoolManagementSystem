import ReactDom from "react-dom";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-9"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-14">
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
