const { default: Template } = require("../components/template");
import { ContextProvider } from "../provider/provider";

const Application = (props) => {
  return (
    <ContextProvider test="Initial Value for Test">
      <div className="wrapper">
        <Template />
      </div>
    </ContextProvider>
  );
};

export default Application;
