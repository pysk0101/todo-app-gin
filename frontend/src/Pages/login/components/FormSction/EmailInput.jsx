import React, { useEffect, useState } from "react";
import useStore from "../../../../Store/store";

const EmailInput = ({ placeholderName, extra, setType, length }) => {
  const { signInDoneCounter } = useStore();
  const [value, setValue] = useState("");

  const handleTypeChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setType(newValue);
  };

  useEffect(() => {
    setValue("");
  }, [signInDoneCounter]);

  return (
    <input
      className={`px-5 py-7 text-[#000000] dark:text-[#FFFFFF] border text-black hover:bg-inputHover focus:bg-inputHover focus:outline-none border-[#00000090] dark:border-[#E0E0E050] dark:bg-inputDark rounded-xl ${extra}`}
      type="text"
      placeholder={placeholderName}
      value={value}
      onChange={handleTypeChange}
      maxLength={length}
    />
  );
};

export default EmailInput;
