import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
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
import {
  histogramData,
  lineChartData,
  radarChartData,
  boxPlotData,
} from "../../../constants/";
export default function ResultHome() {
  return (
    <div>
      <div className="flex my-3 gap-2 flex-wrap sm:flex-nowrap items-center">
        <div className="w-1/2 h-[250px] rounded-xl border border-[#e4e4e7] shadow  ">
          <ResponsiveContainer>
            <RadarChart data={radarChartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Student"
                dataKey="score"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-1/2 h-[250px] rounded-xl border border-[#e4e4e7] shadow">
          <ResponsiveContainer>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex mt-3 gap-2 flex-wrap sm:flex-nowrap items-center">
        <div className="w-1/2 h-[250px] rounded-xl border border-[#e4e4e7] shadow  ">
          <ResponsiveContainer>
            <BarChart data={histogramData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bin" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-1/2 h-[250px] rounded-xl border border-[#e4e4e7] shadow">
          <ResponsiveContainer>
            <BarChart data={boxPlotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="q1" fill="#8884d8" />
              <Bar dataKey="median" fill="#82ca9d" />
              <Bar dataKey="q3" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
