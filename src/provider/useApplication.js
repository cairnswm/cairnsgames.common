import { useContext } from "react";
import { CommonContext } from "./provider";

export const useApplication = () => {
    // get the context
    const context = useContext(CommonContext);

    console.log("CONTEXT", context)
  
    // if `undefined`, throw an error
    if (!context) {
      throw new Error("useUserContext was used outside of its Provider");
    }
    const { application } = context;
  
    return {application};
  };

export default useApplication;  