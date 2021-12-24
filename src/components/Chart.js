import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";

const Chart = () => {
  const chartFilters = ["1D", "1W", "1M", "1Y"];
  const [filter, setFilter] = useState("1D");
  return (
    <Card>
      <ul className="flex absolute top-4 right-4">
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
    </Card>
  );
};

export default Chart;
