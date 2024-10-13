import { useState } from "react";
import SignInHeader from "./SignInHeader";
import UserDetails from "./UserDetails";
import DateOfBirth from "./DateOfBirth";
import GenderSelection from "./GenderSelection";
import useStore from "../../../../../Store/store";
import useDetailsStore from "../../../../../Store/userDetailsStore";
import { getCurrentDate } from "./functions";

const SignInButton = ({ toggleSignIn, isSignInActive }) => {
  const { addUser, users, dicSignInDoneCounter } = useStore();

  const {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    userIdCounter,
    DicUserIdCounter,
    setAllFieldsToDefault,
  } = useDetailsStore();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const createNewAccount = () => {
    const newUser = {
      userID: userIdCounter,
      userType: "user",
      name,
      surName: lastName,
      email,
      password,
      profileImage: "none",
      age: dateOfBirth,
      gender: gender,
      createdAt: getCurrentDate(),
      posts: [
        {
          userID: userIdCounter,
          postID: -1,
          name: "",
          surName: "",
          title: "",
          image: "",
          description: "",
          postCreatedAt: getCurrentDate(),
        },
      ],
    };

    if (checkForValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (checkForStrongPassword(password)) {
      alert(
        "Password must contain at least 8 characters and at least one number."
      );
      return;
    }

    if (checkForEmptyFields(newUser)) {
      return;
    }

    if (checkForExistingEmail(email)) {
      alert("Email already exists.");
      return;
    }

    addUser(newUser);
    DicUserIdCounter();
    setAllFieldsToDefault();
    dicSignInDoneCounter();
    toggleSignIn();

    alert("Account created successfully.");
  };

  const checkForValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email);
  };

  const checkForStrongPassword = (password) => {
    return password.length < 8 || !/\d/.test(password);
  };

  const checkForEmptyFields = (newUser) => {
    for (const key in newUser) {
      if (newUser[key] === "") {
        alert(`Please fill the ${key} field.`);
        return true;
      }
    }
    return false;
  };

  const checkForExistingEmail = (email) => {
    return users.some((user) => user.email === email);
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <button
        className="text-4xl max-[551px]:text-3xl w-[70%] bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 rounded-xl text-secondary dark:text-darkSecondary px-30 py-8 font-semibold"
        onClick={toggleSignIn}
      >
        Sign in
      </button>

      <div
        className={`${
          isSignInActive ? "" : "hidden"
        } absolute bg-[#00000040] w-full h-[100svh] top-0 left-0 z-40 flex items-center justify-center max-[1300px]:px-4`}
      >
        <ul className="grid grid-cols-2 grid-rows-6 max-[700px]:grid-rows-8 gap-5 px-5 shadow-sm bg-secondary dark:bg-darkSecondary rounded-xl max-[700px]:pb-4 max-[700px]:h-[50rem]">
          <SignInHeader toggleSignIn={toggleSignIn} />
          <UserDetails
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={() =>
              setIsPasswordVisible(!isPasswordVisible)
            }
          />
          <DateOfBirth />

          <li className="flex items-center justify-center col-span-1 row-span-2 max-[700px]:col-start-1 max-[700px]:col-end-3 max-[700px]:row-start-8">
            <button
              onClick={createNewAccount}
              className="text-4xl max-[551px]:text-3xl w-[90%] max-[700px]:w-full bg-main1 dark:bg-main1Dark hover:bg-main1Dark dark:hover:bg-main1 rounded-xl text-secondary dark:text-darkSecondary px-30 py-8 font-semibold"
            >
              Sign in
            </button>
          </li>

          <GenderSelection />
        </ul>
      </div>
    </div>
  );
};

export default SignInButton;
