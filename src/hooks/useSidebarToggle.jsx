import { useContext } from "react";
import SidebarContext from "../contexts/SidebarProvider";

const useSidebarToggle = () => {
  return useContext(SidebarContext);
};

export default useSidebarToggle;
