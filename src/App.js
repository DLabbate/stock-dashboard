import "./App.css";
import Chart from "./components/Chart";
import Details from "./components/Details";
import Overview from "./components/Overview";
import Search from "./components/Search";

function App() {
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-5 gap-2 bg-neutral-100 p-8 font-raleway">
      <div className="col-span-3 flex justify-start items-center px-32">
        <h1 className="text-5xl">Apple Inc.</h1>
        <Search />
      </div>
      <div className="col-span-2 row-span-4 p-2">
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
      <div className="row-span-3 p-2">
        <Details />
      </div>
    </div>
  );
}

export default App;
