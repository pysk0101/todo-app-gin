import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Lists from "./components/Lists";
import useDarkModeStore from "./Store/darkMode";

function App() {
  const { isDark } = useDarkModeStore();
  return (
    <div className={`App  ${isDark ? "dark" : ""} `}>
      <div className="bg-main dark:bg-darkMain min-h-[100svh]">
        <Header />
        <Lists />
        <Footer />
      </div>
    </div>
  );
}

export default App;
