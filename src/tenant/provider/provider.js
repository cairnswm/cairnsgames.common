import React, { createContext, useState, useEffect } from "react";

// create context
const TenantContext = createContext();

const TenantProvider = (props) => {
  const { children } = props;

  const [tenant, setTenant] = useState(props.application);

  return (
    // the Provider gives access to the context to its children
    <TenantContext.Provider value={{tenant}}>
      {children}
    </TenantContext.Provider>
  );
};

export { TenantContext, TenantProvider };
export default TenantProvider;