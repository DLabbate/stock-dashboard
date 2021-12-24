import React, { useState } from "react";

const sampleSearchOptions = {
  bestMatches: [
    {
      "1. symbol": "TSCO.LON",
      "2. name": "Tesco PLC",
      "3. type": "Equity",
      "4. region": "United Kingdom",
      "5. marketOpen": "08:00",
      "6. marketClose": "16:30",
      "7. timezone": "UTC+00",
      "8. currency": "GBX",
      "9. matchScore": "0.7273",
    },
    {
      "1. symbol": "TSCDF",
      "2. name": "Tesco plc",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": "0.7143",
    },
    {
      "1. symbol": "TSCDY",
      "2. name": "Tesco plc",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": "0.7143",
    },
  ],
};
const Search = () => {
  return (
    <div className="flex items-center mx-16 bg-white border-2 border-neutral-200 rounded-md relative z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 m-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#737373"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        className="px-4 py-2 w-80 focus:outline-none text-neutral-500 peer"
        placeholder="Search stock..."
      />
      <ul
        className={`absolute top-12 bg-white border-2 border-neutral-200 w-full rounded-md peer-focus:block hidden`}
      >
        {sampleSearchOptions.bestMatches.map((item) => {
          console.log(item);
          return (
            <li className="cursor-pointer p-4 flex items-center justify-between rounded-md hover:bg-indigo-200">
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
