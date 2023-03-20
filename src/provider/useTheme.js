import { useContext } from "react";
import { CommonContext } from "./provider";

export const useTheme = () => {
    // get the context
    const context = useContext(CommonContext);
  
    // if `undefined`, throw an error
    if (!context) {
      throw new Error("useUserContext was used outside of its Provider");
    }
    const { theme, setTheme } = context;
  
    return {theme, setTheme};
  };

export default useTheme;  