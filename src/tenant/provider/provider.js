import React, { createContext, useState, useEffect } from "react";

// create context
const CommonContext = createContext();

const TenantProvider = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState(props.theme || "light");
  const [application, setApplication] = useState(props.application);

  return (
    // the Provider gives access to the context to its children
    <CommonContext.Provider value={{theme, setTheme, application}}>
      {children}
    </CommonContext.Provider>
  );
};

export { CommonContext, TenantProvider };
export default TenantProvider;