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
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";
import {
  createDate,
  convertDateToUnixTimestamp,
} from "../utils/helpers/date-helper";

const Chart = () => {
  const chartFilters = ["1D", "1W", "1M", "1Y"];

  const [filter, setFilter] = useState("1D");

  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState([]);

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

  const chartConfig = {
    "1D": { resolution: "1", days: 1, weeks: 0, months: 0, years: 0 },
    "1W": { resolution: "15", days: 0, weeks: 1, months: 0, years: 0 },
    "1M": { resolution: "60", days: 0, weeks: 0, months: 1, years: 0 },
    "1Y": { resolution: "D", days: 0, weeks: 0, months: 0, years: 1 },
  };

  useEffect(() => {
    const updateChartData = async () => {
      try {
        const endDate = new Date();
        const startDate = createDate(
          endDate,
          chartConfig[filter].days,
          chartConfig[filter].weeks,
          chartConfig[filter].months,
          chartConfig[filter].years
        );
        console.log(startDate, endDate);
        const result = await fetchHistoricalData(
          stockSymbol,
          chartConfig[filter].resolution,
          convertDateToUnixTimestamp(startDate),
          convertDateToUnixTimestamp(endDate)
        );
        console.log(result);
        setData(formatData(result));
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

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
