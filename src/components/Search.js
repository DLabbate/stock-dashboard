import React, { useContext } from "react";
import { sampleSearchOptions } from "../constants/mock";
import ThemeContext from "../context/ThemeContext";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center my-4 bg-white border-2 border-neutral-200 rounded-md relative z-50 ${
        darkMode ? "bg-gray-900 border-gray-800" : null
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 m-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#737373"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        className={`px-4 py-2 w-80 focus:outline-none text-neutral-500 peer rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
      />
      <ul
        className={`absolute top-12 bg-white border-2 border-neutral-200 w-full rounded-md peer-focus:block hidden ${
          darkMode ? "bg-gray-900 border-1 border-gray-800" : null
        }`}
      >
        {sampleSearchOptions.bestMatches.map((item) => {
          console.log(item);
          return (
            <li
              className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200 ${
                darkMode ? "hover:bg-indigo-600" : null
              }`}
            >
              <span>{item["1. symbol"]}</span>
              <span>{item["2. name"]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
