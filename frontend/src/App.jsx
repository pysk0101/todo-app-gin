import "./App.css";

import Header from "./components/Header";
import List from "./components/list/List";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className={` min-h-[100svh] flex flex-col justify-between bg-main `}>
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
