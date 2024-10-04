import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeProvider";

const useThemeToggle = () => {
  return useContext(DarkModeContext);
};

export default useThemeToggle;
