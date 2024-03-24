import React from "react";
import TextField from "@mui/material/TextField";

const NumberInput = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    // accept only integers
    const regex = /^[1-9]\d*$/;
    const isValid = event.target.value === "" || regex.test(event.target.value);
    isValid && onChange(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleInputChange}
      label="Enter a positive integer"
      variant="outlined"
      min={1}
    />
  );
};

export default NumberInput;
