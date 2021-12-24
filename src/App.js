import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-5 gap-2 bg-neutral-100 p-8 font-raleway">
      <div className="col-span-3 flex justify-start items-center px-32">
        <h1 className="text-5xl">Apple Inc.</h1>
      </div>
      <div className="col-span-2 row-span-4 p-4">
        <Card></Card>
      </div>
      <div className="p-4">
        <Card></Card>
      </div>
      <div className="row-span-3 p-4">
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
