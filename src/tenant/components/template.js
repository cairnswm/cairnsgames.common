import React, { useEffect } from "react";
import { useTenant } from "../provider/usetenant";

const Template = () => {
  const { theme } = useTheme();
  const { tenant } = useTenant();

  useEffect(() => {
    console.log("tenant", tenant)
  }, [application]);

  return <div>
    <h1>Common Layer Example </h1>
      <div>
        <b>Theme</b>: {theme}<br/>
        <b>tenant</b>: {tenant}<br/>
      </div>
  </div>
}

export default Template
