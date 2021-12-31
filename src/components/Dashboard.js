import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import ThemeIcon from "./ThemeIcon";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-2 bg-neutral-100 p-8 font-raleway ${
        darkMode ? "bg-gray-900 text-gray-300" : null
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <div className="xl:px-32">
          <h1 className="text-5xl">Apple Inc.</h1>
          <Search />
        </div>

        <ThemeIcon />
      </div>
      <div className="md:col-span-2 row-span-4 p-2">
        <Chart />
      </div>
      <div className="p-2">
        <Overview
          symbol={"AAPL"}
          price={130.63}
          change={3.63}
          changePercent={0.67}
        />
      </div>
      <div className="row-span-2 xl:row-span-3 p-2">
        <Details />
      </div>
    </div>
  );
};

export default Dashboard;
