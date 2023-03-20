import React, { useEffect } from "react";
import { useTheme} from "../provider/useTheme";
import { useApplication } from "../provider/useApplication";

const Template = () => {
  const { theme } = useTheme();
  const { application } = useApplication();

  useEffect(() => {
    console.log("application", application)
  }, [application]);

  return <div>
    <h1>Application </h1>
      <div>
        <b>Theme</b>: {theme}<br/>
        <b>Application</b>: {application}<br/>
      </div>
  </div>
}

export default Template
