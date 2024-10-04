import { Outlet } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Link } from "react-router-dom";


export default function DashboardResult() {
  return (
    <>
      {/* upload navigation */}

      <div className="flex margin-inline">
        <Link to="upload">
          <button className="btn">
            <AiOutlinePlusCircle className="rb-icon" />
            <span className="bb-txt">Upload</span>
          </button>
        </Link>
        <Link to="modify">
          <button className="btn">
            <AiOutlinePlusCircle className="rb-icon" />
            <span className="bb-txt">Modify</span>
          </button>
        </Link>
        <Link to="manually">
          <button className="btn">
            <AiOutlinePlusCircle className="rb-icon" />
            <span className="bb-txt">Manually</span>
          </button>
        </Link>
      </div>

      <Outlet />
    </>
  );
}
