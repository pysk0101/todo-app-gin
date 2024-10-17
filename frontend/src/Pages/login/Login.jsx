import useDarkModeStore from "../../Store/darkMode";

function Login() {
  const { isDark } = useDarkModeStore;
  return <div className={` ${isDark ? "dark" : ""} `}></div>;
}

export default Login;
