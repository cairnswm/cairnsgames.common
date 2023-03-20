import { useContext } from "react";
import { AppContext } from "./provider";

export const useTemplateContext = () => {
    // get the context
    const context = useContext(AppContext);

    console.log("CONTEXT", context)
  
    // if `undefined`, throw an error
    if (!context) {
      throw new Error("useUserContext was used outside of its Provider");
    }
    const { user } = context;
  
    return {user};
  };

export default useTemplateContext;  