import React from "react";

const PreviousBtn = (props) => {
  return (
    <button
      type="button"
      className="btn btn-warning header-btn"
      onClick={props.handlePrev}
      disabled={props.page <= 1}
    >
      Previous
    </button>
  );
};

export default PreviousBtn;
