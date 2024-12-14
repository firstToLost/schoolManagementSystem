const histogramData = [
  { bin: "<60", count: 5 },
  { bin: "60-69", count: 10 },
  { bin: "70-79", count: 15 },
  { bin: "80-89", count: 8 },
  { bin: "90-100", count: 7 },
];

const boxPlotData = [
  { subject: "Math", q1: 50, median: 70, q3: 80, min: 45, max: 90 },
  { subject: "English", q1: 55, median: 75, q3: 85, min: 50, max: 95 },
  { subject: "Science", q1: 45, median: 70, q3: 85, min: 40, max: 95 },
];
const barChartData = [
  { subject: "Math", averageScore: 75 },
  { subject: "English", averageScore: 80 },
  { subject: "Science", averageScore: 70 },
  { subject: "History", averageScore: 85 },
];

const lineChartData = [
  { date: "2024-01", score: 75 },
  { date: "2024-02", score: 78 },
  { date: "2024-03", score: 80 },
  { date: "2024-04", score: 82 },
  { date: "2024-05", score: 85 },
];
const stackedBarChartData = [
  { subject: "Math", A: 20, B: 15 },
  { subject: "English", A: 25, B: 10 },
  { subject: "Science", A: 18, B: 22 },
  { subject: "History", A: 30, B: 20 },
];

const pieChartData = [
  { grade: "A", percentage: 40 },
  { grade: "B", percentage: 30 },
  { grade: "C", percentage: 20 },
  { grade: "D", percentage: 10 },
];
const bubbleChartData = [
  { class: "Class 1", averageScore: 75, size: 25 },
  { class: "Class 2", averageScore: 80, size: 30 },
  { class: "Class 3", averageScore: 70, size: 20 },
  { class: "Class 4", averageScore: 85, size: 35 },
];
const radarChartData = [
  { subject: "Math", score: 85 },
  { subject: "English", score: 78 },
  { subject: "Science", score: 80 },
  { subject: "History", score: 88 },
  { subject: "Art", score: 90 },
];
const scatterPlotData = [
  { attendance: 90, performance: 80 },
  { attendance: 85, performance: 75 },
  { attendance: 95, performance: 90 },
  { attendance: 80, performance: 70 },
  { attendance: 88, performance: 85 },
];

const radialBarChartData = [
  { name: "Math", value: 85 },
  { name: "English", value: 80 },
  { name: "Science", value: 75 },
  { name: "History", value: 90 },
];
const gradeTrendData = [
  { date: "2024-01", averageGrade: 70 },
  { date: "2024-02", averageGrade: 72 },
  { date: "2024-03", averageGrade: 74 },
  { date: "2024-04", averageGrade: 76 },
  { date: "2024-05", averageGrade: 78 },
];

export {
  histogramData,
  boxPlotData,
  barChartData,
  lineChartData,
  stackedBarChartData,
  pieChartData,
  bubbleChartData,
  radarChartData,
  scatterPlotData,
  radialBarChartData,
  gradeTrendData,
};
