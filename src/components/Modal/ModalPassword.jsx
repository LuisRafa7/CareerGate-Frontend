import React, { useState } from "react";
import "./Modal.css";

function ModalPassword({ toggleModal }) {
  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>Password Changed!</h2>
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalPassword;
