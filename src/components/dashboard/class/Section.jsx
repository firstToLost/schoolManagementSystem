import { useNavigate } from "react-router-dom";
export default function Section() {
  const navigate = useNavigate();
  const classes = [
    { grade: 10 },
    { grade: 10 },
    { grade: 10 },
    { grade: 10 },
    { grade: 10 },
    { grade: 10 },
  ];
  return (
    <div className="h-main p-3">
      <button className="btn">Create Class</button>

      {classes.map((c) => (
        <div
          key={c.grade}
          onClick={() => navigate("section")}
          className="my-5 bg-white bg-opacity-10 border border-solid border-white border-opacity-10 rounded-xl text-white py-3 px-4 text-base backdrop-blur-md transition-shadow duration-300"
        >
          {c.grade}
        </div>
      ))}
    </div>
  );
}
