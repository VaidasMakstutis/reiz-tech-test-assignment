import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="text-center mt-3">
      <h5>Loading data...</h5>
      <Spinner variant="secondary" animation="border" />
    </div>
  );
};

export default Loader;
