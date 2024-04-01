import "./modal.css";

function Modal({ show, title, onClose, children }) {
  return (
    show && (
      <div className={`modal ${show ? "active" : ""}`}>
        <div className="modal-header">
          <span>{title}</span>
          <div className="modal-close" onClick={onClose}>
            X
          </div>
        </div>
        <h1>{children}</h1>
      </div>
    )
  );
}

export default Modal;
