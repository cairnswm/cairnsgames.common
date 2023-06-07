import React, { useEffect } from "react";
import { useTenant } from "../provider/usetenant";

const Template = () => {
  const { tenant } = useTenant();

  useEffect(() => {
    console.log("tenant", tenant)
  }, [tenant]);

  return <div>
    <h1>Common Layer Example </h1>
      <div>
        <b>tenant</b>: {tenant}<br/>
      </div>
  </div>
}

export default Template
