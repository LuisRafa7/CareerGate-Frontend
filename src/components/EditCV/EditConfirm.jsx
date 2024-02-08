import React from "react";

function Confirm({ setNumber, submit }) {
  const handleConfirm = () => {
    setNumber(0);
    submit();
  };

  return (
    <div>
      <button onClick={handleConfirm} className="button4 btn-exp">Confirm your CV</button>
    </div>
  );
}

export default Confirm;
