import React, { useState } from "react";
import Modal from "./Modal";
import "./app.css";

function App(props) {
  const [show, setShow] = useState(false);

  const modalOnCloseHandler = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <button type="button" onClick={() => setShow(true)}>
        {`${show ? "Hide" : "Show"} Modal`}
      </button>
      {show && <div className="backdrop" onClick={modalOnCloseHandler} />}
      <Modal show={show} title="Modal Component" onClose={modalOnCloseHandler}>
        Satyam Chatterjee
      </Modal>
    </div>
  );
}

export default App;
