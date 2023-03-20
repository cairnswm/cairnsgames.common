import React, { createContext, useState, useEffect } from "react";
import useUser from "./datahooks/useUser";

// create context
const AppContext = createContext();

const ContextProvider = (props) => {
  const { children } = props;
  // the value that will be given to the context
  const { user } = useUser();

  const [test, settest] = useState(props.test);

  return (
    // the Provider gives access to the context to its children
    <AppContext.Provider value={{user, test, settest}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
export default ContextProvider;