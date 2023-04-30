// CircleChart.jsx
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";


const data = [
  { name: "Monday", value: 12 },
  { name: "Tuesday", value: 19 },
  { name: "Wednesday ", value: 3 },
  { name: "Thursday", value: 5 },
  { name: "Friday", value: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CircleChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              padding: "2px",
              color:"#fff"
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default CircleChart;
