import { Outlet } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="p-3 h-main overflow-y-scroll">
      {/* upload navigation */}

      <div className="flex justify-between">
        <Link to="pending">
          <button className="btn-primary flex items-center gap-2">
            <AiOutlinePlusCircle />
            <span>Pending</span>
          </button>
        </Link>
        <Link to="create">
          <button className="btn-primary flex items-center gap-2">
            <AiOutlinePlusCircle />
            <span>Create</span>
          </button>
        </Link>
        <Link to="manually">
          <button className="btn-primary flex items-center gap-2">
            <AiOutlinePlusCircle />
            <span>Manually</span>
          </button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
