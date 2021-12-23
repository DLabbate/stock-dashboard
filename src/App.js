import "./App.css";

// function App() {
//   return (
//     <div className="h-screen bg-neutral-100">
//       <div class="h-48 flex justify-start items-center p-16">
//         <h1 class="text-6xl ">Apple Inc.</h1>
//         <input
//           class="border-2 border-gray-300 bg-white w-128 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none m-16"
//           type="text"
//           placeholder="Search"
//         ></input>
//       </div>
//       <div class="w-full h-full grid grid-cols-3 grid-rows-4 gap-4">
//         <div class="bg-red-100 col-span-2 row-span-4">Box 1</div>
//         <div class="bg-red-200">Box 2</div>
//         <div class="bg-red-300 row-span-3">Box 3</div>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-5 gap-4 bg-neutral-100">
      <div className="bg-green-300 col-span-3 flex justify-start items-center">
        Header
      </div>
      <div className="bg-yellow-300 col-span-2 row-span-4">Chart</div>
      <div className="bg-blue-300">Overview</div>
      <div className="bg-red-300 row-span-3">Details</div>
    </div>
  );
}

export default App;
