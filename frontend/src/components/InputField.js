import React from "react";
import "../styles/components/Inputfield.css";

function InputField({ onChange, value, onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          className="Inputfield"
          required
        />
        <button className="AddItem" type="submit">
          Add Items
        </button>
      </form>
    </>
  );
}

export default InputField;
