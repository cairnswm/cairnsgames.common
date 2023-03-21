import { useContext } from "react";
import { CommonContext } from "./provider";

export const useTestContext = () => {
    // get the context
    const context = useContext(CommonContext);
  
    // if `undefined`, throw an error
    if (!context) {
      throw new Error("useUserContext was used outside of its Provider");
    }
    const { test, settest } = context;
  
    return {test, settest};
  };

export default useTestContext;  