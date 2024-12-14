import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center">
      <p className="text-[25vw] font-extrabold">404</p>
      <p className="text-[10vw] text-center font-semibold">Page Not Found</p>
      <button className="btn" onClick={() => navigate(-1)}>
        go back
      </button>
    </div>
  );
}
