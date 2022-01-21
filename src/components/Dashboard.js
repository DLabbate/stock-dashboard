import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 xl:grid-rows-5 auto-rows-fr gap-2 p-8 font-quicksand">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 p-2">
        <Card>Header</Card>
      </div>
      <div className="md:col-span-2 row-span-4 p-2">
        <Card>Chart</Card>
      </div>
      <div className="p-2">
        <Card>Overview</Card>
      </div>
      <div className="row-span-2 xl:row-span-3 p-2">
        <Card>Details</Card>
      </div>
    </div>
  );
};

export default Dashboard;
