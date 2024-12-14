import { Outlet } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

export default function AcademicYear() {
  return (
    <div className="p-3 h-main overflow-y-scroll">
      {/* upload navigation */}

      <div className="flex justify-between">
        <Link to="term">
          <button className="btn-primary flex items-center gap-2">
            <AiOutlinePlusCircle />
            <span>Term</span>
          </button>
        </Link>
        <Link to="grade">
          <button className="btn-primary flex items-center gap-2">
            <AiOutlinePlusCircle />
            <span>Grade</span>
          </button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
