const { default: Template } = require("../components/template");
import { CommonProvider } from "../provider/provider";

const Application = (props) => {
  return (
    <CommonProvider test="Initial Value for Test" application="950ef1d9-c657-11ed-95d1-f0a654c38aa6">
      <div className="wrapper">
        <Template />
      </div>
    </CommonProvider>
  );
};

export default Application;
