import { useNavigate, useLocation } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";

export default function Breadcrumb() {
  const navigate = useNavigate();

  const currentLocation = useLocation()
    .pathname.split("/")
    .slice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return (
    <div className="py-2 flex items-center text-sm">
      <div className="flex items-center">
        <span
          className="cursor-pointer text-base text-primary font-semibold"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <MdKeyboardArrowRight />
      </div>

      {currentLocation.map((location, i) => (
        <div className="flex items-center" key={i}>
          <span className="text-sm font-semibold text-primary">{location}</span>
          {i !== currentLocation.length - 1 && <MdKeyboardArrowRight />}
        </div>
      ))}
    </div>
  );
}
