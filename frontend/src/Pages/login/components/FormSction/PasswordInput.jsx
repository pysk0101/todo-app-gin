import { useState, useEffect } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import useStore from "../../../../Store/store";

const PasswordInput = ({
  isPasswordVisible,
  togglePasswordVisibility,
  extra,
  setPassword,
}) => {
  const { signInDoneCounter } = useStore();
  const [value, setValue] = useState("");

  const handleTypeChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setPassword(newValue);
  };

  useEffect(() => {
    setValue("");
  }, [signInDoneCounter]);

  return (
    <div className={`relative hover:bg-inputHover ${extra}`}>
      <input
        className="px-5 py-7 pr-[4.5rem] first-line:border w-full text-black hover:bg-inputHover focus:bg-inputHover focus:outline-main2 border border-[#00000090] dark:border-[#E0E0E050] rounded-xl"
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={handleTypeChange}
      />
      <div
        className="absolute text-5xl -translate-y-1/2 cursor-pointer right-5 top-1/2"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? <MdVisibilityOff /> : <MdVisibility />}
      </div>
    </div>
  );
};

export default PasswordInput;
