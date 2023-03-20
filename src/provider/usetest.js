import { useContext } from "react";
import { AppContext } from "./provider";

export const useTestContext = () => {
    // get the context
    const context = useContext(AppContext);

    console.log("CONTEXT", context)
  
    // if `undefined`, throw an error
    if (!context) {
      throw new Error("useUserContext was used outside of its Provider");
    }
    const { test, settest } = context;
  
    return {test, settest};
  };

export default useTestContext;  