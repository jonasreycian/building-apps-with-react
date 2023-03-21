import React from "react";

const GlobalStateContext = React.createContext();

export const GlobalStateProvider = ({ children }) => {
  return (
    <GlobalStateContext.Provider value={{}}>
      {children}
    </GlobalStateContext.Provider>
  );
};
