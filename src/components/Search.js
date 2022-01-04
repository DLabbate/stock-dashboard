import React, { useContext, useEffect, useState } from "react";
import { sampleSearchOptions } from "../constants/mock";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";
import { searchSymbol } from "../utils/api/stock-api";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  useEffect(() => {
    const updateBestMatches = async () => {
      const searchResults = await searchSymbol(input);
      const result = searchResults.result;
      if (result && result.length > 0) {
        setBestMatches(result);
      } else {
        setBestMatches([]);
      }
    };
    if (input) {
      updateBestMatches();
    }
  }, [input]);
  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
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
        value={input}
        className={`px-4 py-2 w-96 focus:outline-none text-neutral-500 rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => setInput(event.target.value)}
      />
      {
        <ul
          className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll custom-scrollbar ${
            darkMode
              ? "bg-gray-900 border-gray-800"
              : "bg-white border-neutral-200 "
          }`}
        >
          {bestMatches.map((item) => {
            return (
              <li
                key={item.symbol}
                className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
                  darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200 "
                }`}
                onClick={() => setStockSymbol(item.symbol)}
              >
                <span>{item.symbol}</span>
                <span>{item.description}</span>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Search;
