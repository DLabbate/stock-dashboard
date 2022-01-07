import React, { useContext, useEffect, useState } from "react";
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
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";

const Chart = () => {
  const chartFilters = ["1D", "1W", "1M", "1Y"];

  const [filter, setFilter] = useState("1D");

  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState([]);

  const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
  };

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        // time: new Date(data.t[index] * 1000).toLocaleDateString(),
        time: new Date(data.t[index] * 1000).toLocaleDateString(),
        //time: data.t,
      };
    });
  };

  const chartFilters2 = {
    "1D": { resolution: 1, seconds: 60 * 60 * 24 },
    "1W": { resolution: 1, seconds: 60 * 60 * 24 },
    "1M": { resolution: 1, seconds: 60 * 60 * 24 },
    "1Y": { resolution: 1, seconds: 60 * 60 * 24 },
  };

  useEffect(() => {
    const updateChartData = async () => {
      try {
        const today = new Date();
        const oneDay = 60 * 60 * 24;
        console.log(convertDateToUnixTimestamp(today));
        const result = await fetchHistoricalData(
          stockSymbol,
          convertDateToUnixTimestamp(today) - oneDay,
          convertDateToUnixTimestamp(today)
        );
        setData(formatData(result));
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };

    updateChartData();
  }, [stockSymbol]);

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {chartFilters.map((item) => (
          <li key={item}>
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
      <ResponsiveContainer>
        <AreaChart data={data}>
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
            strokeWidth={0.5}
          />
          <XAxis dataKey="time" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
