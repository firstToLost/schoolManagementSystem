import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [clubsIsMount, setClubsIsMount] = useState(false);

  return (
    <DataContext.Provider value={{ clubsIsMount, setClubsIsMount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
