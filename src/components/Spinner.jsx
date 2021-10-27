import React from "react";
import loading2 from "./loading2.gif";

const Spinner = () => {
  return (
    <div
      className="text-center"
      style={{ backgroundColor: "#f5f4f8", width: "100%" }}
    >
      <img src={loading2} alt="loading..." className="text-center" />
    </div>
  );
};

export default Spinner;
