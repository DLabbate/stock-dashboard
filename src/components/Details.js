import React from "react";
import Card from "./Card";

const Details = () => {
  return (
    <Card>
      <table className="w-full h-full">
        <tbody className="divide-y-1 divide-neutral-200">
          <tr>
            <td>Exchange</td>
            <td className="font-bold">NYSE</td>
          </tr>
          <tr>
            <td>Country</td>
            <td className="font-bold">USA</td>
          </tr>
          <tr>
            <td>Sector</td>
            <td className="font-bold">Technology</td>
          </tr>
          <tr>
            <td>Market Cap</td>
            <td className="font-bold">1000B</td>
          </tr>
          <tr>
            <td>Dividend Yield</td>
            <td className="font-bold">0.0507</td>
          </tr>
          <tr>
            <td>P/E Ratio</td>
            <td className="font-bold">25.28</td>
          </tr>
          <tr>
            <td>EPS</td>
            <td className="font-bold">5.28</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default Details;
