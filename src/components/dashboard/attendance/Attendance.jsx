import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import Calendar from "../../Calendar";

// Example data: Each bar's color intensity represents attendance levels
const data02 = [
  { week: "Week 1", Mon: 5, Tue: 10, Wed: 15, Thu: 20 },
  { week: "Week 2", Mon: 20, Tue: 15, Wed: 10, Thu: 5 },
  { week: "Week 3", Mon: 10, Tue: 20, Wed: 15, Thu: 10 },
  { week: "Week 4", Mon: 5, Tue: 10, Wed: 20, Thu: 15 },
];

const colors0 = ["#ffffff", "#ffcccc", "#ff9999", "#ff6666", "#ff3333"];

const getColor = (value) => {
  if (value < 10) return colors0[0];
  if (value < 15) return colors0[1];
  if (value < 20) return colors0[2];
  if (value < 25) return colors0[3];
  return colors0[4];
};

const data = [
  { name: "Present", value: 500 },
  { name: "Absent", value: 50 },
];

const COLORS = ["#00C49F", "#FF8042"];

export default function Attendance() {
  return (
    <div className="p-3">
      <div className="flex max-sm:flex-col">
        <div className="h-[350px] w-full flex-col sm:flex-row">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <Calendar />
      </div>
    </div>
  );
}
