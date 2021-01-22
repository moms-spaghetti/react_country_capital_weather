import React from "react";
import { v4 as uuid } from "uuid";
import "./input.css";

function Input({ captureInput, inputRef, inputListDrop }) {
  return (
    <>
      <input
        ref={inputRef}
        list="countries"
        onKeyUp={(e) => {
          captureInput(e);
        }}
        placeholder="Search a country"
      />
      <datalist id="countries">
        {inputListDrop.map((countryName) => {
          return <option key={uuid()} value={`${countryName.name}`} />;
        })}
      </datalist>
    </>
  );
}

export default Input;
