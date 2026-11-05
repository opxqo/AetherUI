import * as React from "react";

const reactProxy = new Proxy(React, {
  get(target, prop, receiver) {
    if (prop === "version") return "19.3.0";
    return Reflect.get(target, prop, receiver);
  },
});

const t = () => reactProxy;
export { t };
export default reactProxy;
