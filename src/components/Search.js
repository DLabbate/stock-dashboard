import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { searchSymbol } from "../utils/api/stock-api";
import SearchResults from "./SearchResults";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const updateBestMatches = async () => {
    const searchResults = await searchSymbol(input);
    const result = searchResults.result;
    if (result) {
      setBestMatches(result);
    } else {
      setBestMatches([]);
    }
  };

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none text-neutral-500 rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      <button onClick={updateBestMatches}>
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
      </button>
      {bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}
    </div>
  );
};

export default Search;
