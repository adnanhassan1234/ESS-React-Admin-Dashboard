import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";

const data = [
  {
    name: "Monday",
    blue: 12,
  },
  {
    name: "Tuesday",
    blue: 19,
  },
  {
    name: "Wednesday",
    blue: 3,
  },
  {
    name: "Thursday",
    blue: 5,
  },
  {
    name: "Friday",
    blue: 2,
  },
];

const DashboardBarChart = (props) => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={props.chartContent}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#FFFFFF",
              padding: "2px",
            }}chartData
          />
          <Bar dataKey="price" fill="#1F71FF" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardBarChart;
