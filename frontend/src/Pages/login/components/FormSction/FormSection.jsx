import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";
import SignInButton from "./signInButton/SignInButton";

const FormSection = () => {
  const [isSignInActive, setIsSignInActive] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" max-[551px]:w-full flex flex-col gap-6 px-5 py-11 shadow-xl bg-secondary dark:bg-darkSecondary rounded-xl h-[40rem]">
      <form className="w-[30rem] max-[551px]:w-full flex flex-col gap-9 text-4xl text-[#00000050] dark:text-[#E0E0E050] max-[551px]:text-3xl">
        <EmailInput
          placeholderName="Enter your email"
          extra=""
          setType={setEmail}
          length={1000}
        />
        <PasswordInput
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={() =>
            setIsPasswordVisible(!isPasswordVisible)
          }
          extra=""
          setPassword={setPassword}
        />
        <LoginButton email={email} password={password} />
      </form>

      <hr className="h-[2px] rounded-full bg-[#00000085]" />

      <SignInButton
        toggleSignIn={() => setIsSignInActive(!isSignInActive)}
        isSignInActive={isSignInActive}
      />
    </div>
  );
};

export default FormSection;
