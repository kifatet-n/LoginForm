import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const InputField = ({ label, type, placeholder, value, onChange, error }) => {
  console.log("value:", value);
  console.log("onChange:", onChange);
  //iconu input novune gore teyin edirik
  const getIcon = () => {
    if (type === "email") return <MdOutlineEmail className="input-icon" />;
    if (type === "password") return <CiLock className="input-icon" />;
    return null;
  };
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        {getIcon()}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}
        />
        {error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
};

export default InputField;
