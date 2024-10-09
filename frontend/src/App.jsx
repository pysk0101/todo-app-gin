import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Lists from "./components/Lists";

function App() {
  return (
    <div className={`App bg-main min-h-[100svh] `}>
      <Header />
      <Lists />
      <Footer />
    </div>
  );
}

export default App;
