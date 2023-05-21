const { default: Template } = require("../tenant/components/template");
import { TenantProvider } from "../tenant/provider/provider";

const Application = (props) => {
  return (
    <TenantProvider test="Initial Value for Test" application="950ef1d9-c657-11ed-95d1-f0a654c38aa6">
      <div className="wrapper">
        <Template />
      </div>
    </TenantProvider>
  );
};

export default Application;
