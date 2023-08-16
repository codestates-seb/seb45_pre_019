import { useState } from "react";

const useInput = (initialvalue) => {
  const [value, setValue] = useState();

  const reset = () => {
    setValue(initialvalue);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange, reset];
};

export default useInput;
