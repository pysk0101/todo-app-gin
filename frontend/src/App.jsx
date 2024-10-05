import "./App.css";

import Header from "./components/Header";
import AddTask from "./components/list/listComponents/AddTask";
import List from "./components/list/List";
import Footer from "./components/footer";
import useDarkMode from "./store/darkModeStore";

function App() {
  const { darkMode } = useDarkMode();

  return (
    <div className={` App ${darkMode ? "dark" : ""} `}>
      <div
        className={` min-h-[100svh] flex flex-col justify-between bg-main  dark:bg-darkMain `}
      >
        <Header />
        <div className={"mt-16 p-2 h-full lg:px-5"}>
          <AddTask />
          <List />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
