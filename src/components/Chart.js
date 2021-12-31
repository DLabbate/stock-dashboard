import React, { useContext, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import { intradayData } from "../constants/mock";
import ThemeContext from "../context/ThemeContext";

const Chart = () => {
  const chartFilters = ["1D", "1W", "1M", "1Y"];

  const [filter, setFilter] = useState("1D");

  const { darkMode } = useContext(ThemeContext);
  const formatData = () => {
    let data = [];
    Object.entries(intradayData["Time Series (5min)"]).forEach((item) => {
      data.push({ time: item[0], value: item[1]["4. close"] });
    });
    console.log(data);
    return data;
  };

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {chartFilters.map((item) => (
          <li>
            <Button
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      {/* {formatData()} */}
      <ResponsiveContainer>
        <AreaChart data={formatData()}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={1}
          />
          <XAxis dataKey="time" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
