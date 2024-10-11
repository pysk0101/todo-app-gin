import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask";
import List from "./components/list/List";
import useDarkModeStore from "./Store/darkMode";

function App() {
  const { isDark } = useDarkModeStore();
  return (
    <div className={`App  ${isDark ? "dark" : ""}  `}>
      <div className="bg-main dark:bg-darkMain marker:m-h-[100svh] ">
        <Header />
        <div className={"mt-16 p-2  lg:px-5"}>
          <AddTask />
          <List />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
