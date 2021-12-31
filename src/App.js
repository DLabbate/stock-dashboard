import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Details from "./components/Details";
import Overview from "./components/Overview";
import Search from "./components/Search";
import ThemeIcon from "./components/ThemeIcon";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`h-screen grid grid-cols-3 grid-rows-5 gap-2 bg-neutral-100 p-8 font-raleway ${
          darkMode ? "bg-gray-900 text-gray-300" : null
        }`}
      >
        <div className="col-span-3 flex justify-start items-center">
          <div className="xl:px-32">
            <h1 className="text-5xl">Apple Inc.</h1>
            <Search />
          </div>

          <ThemeIcon />
        </div>
        <div className="col-span-3 xl:col-span-2 row-span-4 p-2">
          <Chart />
        </div>
        <div className="col-span-1 xl:col-span-1 p-2">
          <Overview
            symbol={"AAPL"}
            price={130.63}
            change={3.63}
            changePercent={0.67}
          />
        </div>
        <div className="col-span-2 xl:col-span-1 row-span-3 p-2">
          <Details />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
