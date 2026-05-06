import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart(props) {
  console.log(props.dayData);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={props.dayData}>
        <XAxis dataKey="inputDay" />
        <YAxis />
        <Bar dataKey="inputSales" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
