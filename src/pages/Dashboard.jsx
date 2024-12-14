import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AiOutlineMenu, AiOutlineSun } from "react-icons/ai";
import useSidebarToggle from "../hooks/useSidebarToggle";
import "../styles/Dashboard.css";
import useThemeToggle from "../hooks/useThemeToggle";
import Breadcrumb from "../components/Breadcrumb";
import TopPanel from "../components/TopPanel";

export default function Dashboard() {
  const { toggleTheme } = useThemeToggle();

  const { toggleSidebar } = useSidebarToggle();

  return (
    <div className="grid h-dvh grid-template-dashboard bg-no-repeat bg-cover">
      <Sidebar />
      <div className="scrollbar-hidden overflow-y-hidden">
        <TopPanel />
        <div className="bg-babyBlue-bg rounded-md overflow-y-hidden h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
