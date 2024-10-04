import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineBank,
  AiOutlineSchedule,
  AiOutlineBarChart,
  AiOutlineSend,
  AiOutlineUpload,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import useSidebarToggle from "../hooks/useSidebarToggle";
import useAuth from "../hooks/useAuth";

import joker from "/joker.jpg";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const { auth } = useAuth();
  const { isSidebarOpen, toggleSidebar } = useSidebarToggle();
  const [navInfo, setNavInfo] = useState([
    {
      text: "Dashboard",
      icon: (
        <AiOutlineHome className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 home-icon" />
      ),
      to: "/dashboard/",
    },
    {
      text: "Events",
      icon: (
        <AiOutlineBank className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 bank-icon" />
      ),
      to: "/dashboard/events",
    },
    {
      text: "Schedule",
      icon: (
        <AiOutlineSchedule className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 schedule-icon" />
      ),
      to: "/dashboard/schedule",
    },
    {
      text: "Results",
      icon: (
        <AiOutlineBarChart className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/result",
    },
    {
      text: "Lesson Plan",
      icon: (
        <AiOutlineSend className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/send",
    },
    {
      text: "Upload",
      icon: (
        <AiOutlineUpload className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/upload",
    },
    {
      text: "Report",
      icon: (
        <AiOutlineBook className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/report",
    },
    {
      text: "Attendance",
      icon: (
        <AiOutlineBook className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/attendance",
    },
    {
      text: "Students",
      icon: (
        <AiOutlineUser className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/students",
    },
    {
      text: "paid",
      icon: (
        <AiOutlineUser className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/check-payment",
    },
    {
      text: "Registration",
      icon: (
        <AiOutlineUser className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/registration",
    },
    {
      text: "Assessment",
      icon: (
        <AiOutlineUser className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/assessment",
    },
    {
      text: "Section",
      icon: (
        <AiOutlineUser className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/class",
    },
    {
      text: "Academic",
      icon: (
        <AiOutlineUser className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/academic",
    },
    {
      text: "Teachers",
      icon: (
        <AiOutlineUser className="nav__link-icon text-lg w-6 flex-shrink-0 me-2 sm:me-0 BarChart-icon" />
      ),
      to: "/dashboard/teachers",
    },
  ]);
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-10" : "-translate-x-full"
      } sidebar w-[250px] hover:w-[250px] rounded-2xl h-max sm:h-auto absolute top-1/2 -translate-y-1/2  sm:static sm:rounded-none sm:w-[85px] z-5 sm:translate-x-0 sm:translate-y-0 overflow-x-hidden overflow-y-scroll scrollbar-hidden  border border-[#e4e4e7] shadow`}
    >
      <div className="flex items-center gap-3 px-2 py-4 relative profile sm:justify-center">
        <img
          src={joker}
          className="w-[60px] rounded-full aspect-square object-cover"
        />
        <span className="text-sm text-primary whitespace-nowrap sm:hidden p-name capitalize font-semibold">
          {auth.user}
        </span>
        <span
          className="absolute sm:hidden top-4 right-4"
          onClick={() => toggleSidebar(false)}
        >
          <AiOutlineClose />
        </span>
      </div>
      <div className="border border-[#e4e4e7] " />
      <nav className="sm:p-2 p-4">
        <ul className="list-none">
          {navInfo.map((element, index) => (
            <li className="px-3" key={index}>
              <Link
                className="nav__link text-primary cursor-pointer flex items-center sm:justify-center my-6"
                to={element.to}
                onClick={() => toggleSidebar(false)}
              >
                {element.icon}
                <span className="nav__link-text whitespace-nowrap sm:w-0 overflow-hidden text-sm font-semibold">
                  {element.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
