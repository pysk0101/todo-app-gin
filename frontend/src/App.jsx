import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask";
import List from "./components/list/List";
import useDarkModeStore from "./Store/darkMode";

function App() {
  const { isDark } = useDarkModeStore();
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="App bg-main dark:bg-darkMain ">
        <Header />
        <div
          className={
            "pt-24 p-2  lg:px-5 min-h-[97.4svh] min-[2000px]:min-h-[100svh]"
          }
        >
          <AddTask />
          <List />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
