import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export default function DashboardHome() {
  const data01 = [
    {
      name: "Group A",
      value: 500,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];

  const data = [
    {
      name: "Page A",
      uv: 400,
    },
    {
      name: "Page B",
      uv: 300,
    },
    {
      name: "Page C",
      uv: 200,
    },
    {
      name: "Page D",
      uv: 280,
    },
    {
      name: "Page E",
      uv: 190,
    },
    {
      name: "Page F",
      uv: 290,
    },
    {
      name: "Page G",
      uv: 390,
    },
  ];
  const data02 = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <div className="p-3">
      <div className="flex justify-between w-full my-1 gap-2 flex-wrap  sm:flex-nowrap">
        <div className="w-full sm:w-1/2 h-[250px] rounded-xl border border-[#e4e4e7] shadow">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                paddingAngle={4}
                outerRadius={100}
                innerRadius={80}
                cornerRadius={10}
                label
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`#${Math.floor(Math.random() * 16777215).toString(
                      16
                    )}`}
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{
                  padding: 20,
                  fontSize: 14,
                }}
                iconType="line" // You can use "circle" if you want circular icons
                iconSize={15}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full sm:w-1/2 h-[250px] rounded-xl border border-[#e4e4e7] shadow">
          <ResponsiveContainer>
            <RadarChart outerRadius={90} data={data02}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />

              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full h-[300px] my-1 py-2 rounded-xl border border-[#e4e4e7] shadow">
        <ResponsiveContainer>
          <BarChart data={data} className="border-radius">
            <XAxis dataKey="name" />
            <YAxis domain={[0, 800]} />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Bar dataKey="uv" fill="#000" barSize={20} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
