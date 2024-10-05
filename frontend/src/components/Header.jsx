import Button from "./Button";
import useDarkMode from "../store/darkModeStore";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`fixed flex w-full p-2 lg:px-5  justify-between items-center bg-secondary text-primary z-50`}
    >
      <h1 className={`text-3xl 2xl:text-4xl font-bold leading-none `}>TODO</h1>

      <Button
        icon={`material-symbols-light:${darkMode ? "light-mode" : "dark-mode"}`}
        extraClasses={"text-4xl  bg-main "}
        funcName={toggleDarkMode}
      />
    </header>
  );
}
