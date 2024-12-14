import { Link } from "react-router-dom";
const Print = () => {
  return (
    <div className="h-main p-3">
      <Link to="roaster">
        <button className="btn-primary">Roaster</button>
      </Link>
    </div>
  );
};

export default Print;
