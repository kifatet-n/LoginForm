import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div>
      <label className="checkbox">
        <input type="checkbox" />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
