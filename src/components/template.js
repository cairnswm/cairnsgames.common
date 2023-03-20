import React, { useEffect } from "react";
import { useTemplateContext } from "../provider/useprovider";
import { useTestContext } from "../provider/usetest";

const Template = () => {
  const { user } = useTemplateContext();
  const { test } = useTestContext();

  useEffect(() => {
    console.log("USER", user)
  }, [user]);

  return <div>
    <h1>User</h1>
    {user && <div>
      <p>{user.name.first} {user.name.last}</p>
      </div>}
      <div>
        <b>Test</b>: {test}
      </div>
  </div>
}

export default Template
