import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
export default function StudentsHome() {
  const COLORS = ["#0088FE", "#00C49F"];
  const mockData = [
    { grade: "Grade 1", count: 120 },
    { grade: "Grade 2", count: 100 },
    { grade: "Grade 3", count: 130 },
    { grade: "Grade 4", count: 110 },
    { grade: "Grade 5", count: 90 },
  ];
  const mockData01 = [
    { name: "Male", value: 600 },
    { name: "Female", value: 500 },
  ];
  const mockData03 = [
    { month: "Jan", attendance: 95 },
    { month: "Feb", attendance: 92 },
    { month: "Mar", attendance: 93 },
    { month: "Apr", attendance: 94 },
    { month: "May", attendance: 91 },
    { month: "Jun", attendance: 90 },
  ];
  const mockData04 = [
    { category: "Disciplinary Actions", count: 50 },
    { category: "Commendations", count: 70 },
    { category: "Absences", count: 40 },
  ];
  return (
    <div className="p-3">
      <div className="flex column sm:row w-full gap-3 my-3">
        <div className="w-1/2 h-[255px] glass">
          <ResponsiveContainer>
            <BarChart w data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 h-[255px] glass">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={mockData01}
                dataKey="value"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {mockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex column sm:row w-full gap-3 my-3">
        <div className="w-1/2 h-[245px] glass">
          <ResponsiveContainer>
            <LineChart data={mockData03}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 h-[245px] glass">
          <ResponsiveContainer>
            <BarChart data={mockData04}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
