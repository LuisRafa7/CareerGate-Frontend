import React, { useState } from "react";
import "./Modal.css";

function ModalEmail({ toggleModal }) {
  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>Email Changed!</h2>
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalEmail;
