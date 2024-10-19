import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask";
import List from "./components/list/List";
import useDarkModeStore from "./Store/darkMode";
import Login from "./Pages/login/Login";

function App() {
  const { isDark } = useDarkModeStore();
  return (
    <Router>
      <div className={`${isDark ? "dark" : ""}`}>
        <div className="App bg-main dark:bg-darkMain ">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="pt-20 p-2 lg:px-5 min-h-[97.4svh]  custom:min-h-[100svh] ">
                  <AddTask />
                  <List />
                </div>
              }
            />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
