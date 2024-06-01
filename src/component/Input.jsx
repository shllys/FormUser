import React from "react";

function Input(props) {
  const { onChange } = props;
  return (
    <div className="input">
      <label htmlFor="#">{props.name}</label>
      <input className="bar" type={props.type} onChange={onChange} />
    </div>
  );
}

export default Input;
