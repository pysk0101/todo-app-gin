import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Lists from "./components/Lists";
import useDarkModeStore from "./Store/darkMode";

function App() {
  const { isDark } = useDarkModeStore();
  return (
    <div className={`App bg-main min-h-[100svh] ${isDark ? "dark" : ""} `}>
      <Header />
      <Lists />
      <Footer />
    </div>
  );
}

export default App;
