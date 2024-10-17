import React, { useState } from "react";
import useDarkModeStore from "../../Store/darkMode";

function Login() {
  const { isDark } = useDarkModeStore();
  return (
    <div className={` ${isDark ? "dark" : ""} `}>
      <SignInForm />
    </div>
  );
}

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <section className="bg-main dark:bg-darkMain">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow bg-secondary dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-darkSecondary dark:border-darkPrimary30">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl dark:text-darkText">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-text dark:text-darkText"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-main border border-primary text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-darkMain dark:border-darkPrimary dark:placeholder-darkPrimary10 dark:text-darkText dark:focus:ring-darkPrimary dark:focus:border-darkPrimary"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-text dark:text-darkText"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-main border border-primary text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-darkMain dark:border-darkPrimary dark:placeholder-darkPrimary10 dark:text-darkText dark:focus:ring-darkPrimary dark:focus:border-darkPrimary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded border-primary bg-main focus:ring-3 focus:ring-primary dark:bg-darkMain dark:border-darkPrimary dark:focus:ring-darkPrimary"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-text dark:text-darkText"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:underline dark:text-darkPrimary"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary50 focus:ring-4 focus:outline-none focus:ring-primary30 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-darkPrimary dark:hover:bg-darkPrimary50 dark:focus:ring-darkPrimary30"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-text dark:text-darkText">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary hover:underline dark:text-darkPrimary"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
