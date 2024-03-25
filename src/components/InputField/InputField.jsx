import React, { useState } from "react";
import "./InputField.css";

const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, label, id, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="inputBox pb-8">
      <input
        {...inputProps}
        onChange={onChange}
        className="w-full"
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <label className="input-group">{label}</label>
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputField;
