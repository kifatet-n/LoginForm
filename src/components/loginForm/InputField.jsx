import React from 'react'

const InputField = ({label,type,placeholder,icon}) => {
  return (
    <div className="input-group">
        <img src={icon} alt={`${label} icon`}  className="input-icon"/>
        <input type={type} placeholder={placeholder} required/>

    </div>
  );
};

export default InputField