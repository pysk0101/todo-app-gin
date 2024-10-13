import React from "react";
import useStore from "../../../../Store/store";

const LoginButton = ({ email, password }) => {
  const { users, loggedAccount, setLoggedAccount } = useStore();

  const login = () => {
    const user = users.find((user) => user.email === email);

    if (!user) {
      alert("User not found");
      return;
    }

    if (
      loggedAccount.email === user.email &&
      loggedAccount.password === user.password
    ) {
      alert("Already logged in");
      return;
    }

    if (user.password === password) {
      alert("Logged in successfully");
      setLoggedAccount(user);
      console.log("Logged in as", user.email);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <button
      className={`bg-main2 dark:bg-darkPrimary hover:bg-darkPrimary dark:hover:bg-main2 rounded-xl text-secondary dark:text-darkSecondary px-30 py-8 font-semibold`}
      type="submit"
      onClick={login}
    >
      Log in
    </button>
  );
};

export default LoginButton;
