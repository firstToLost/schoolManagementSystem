import { AiOutlineMenu, AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import useSidebarToggle from "../hooks/useSidebarToggle";

import useThemeToggle from "../hooks/useThemeToggle";
import Breadcrumb from "./Breadcrumb";
import useLogOut from "../hooks/useLogOut";

export default function TopPanel() {
  const { toggleTheme } = useThemeToggle();
  const { toggleSidebar } = useSidebarToggle();
  const logout = useLogOut();

  return (
    <div className="flex mx-2 justify-between">
      <Breadcrumb />
      <div className="flex items-center gap-2">
        <span onClick={logout} className="font-bold cursor-pointer">
          logout
        </span>
        <span
          className="toggle-btn cursor-pointer relative"
          onClick={toggleTheme}
        >
          <AiOutlineSun className="h-full text-2xl dark:hidden" />
          <AiOutlineMoon className="h-full text-2xl origin-center hidden dark:block" />
        </span>
        <span
          className="toggle-btn sm:hidden cursor-pointer"
          onClick={() => toggleSidebar(true)}
        >
          <AiOutlineMenu className="h-full text-2xl" />
        </span>
      </div>
    </div>
  );
}
