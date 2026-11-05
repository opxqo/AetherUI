import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-B0whtqPR.js";

/**
 * Decision Tree [Clean Style] (Agents)
 * An agent stuck on a decision lays out its options as a tree – the consequences of each branch, the risky ones marked, its own pick highlighted – and you choose a path or write your own
 */
export function DecisionTree(props = {}) {
  const { demo, className, style, ...rest } = props;
  const hasCustomProps = demo === false || (!demo && Object.keys(rest).some(k => !["id", "children", "key", "ref"].includes(k) && !k.startsWith("data-") && !k.startsWith("aria-")));
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, { className, style, ...rest });
  }
  const element = React.createElement(DemoComponent, { className, style, ...rest });
  if (className || style) {
    return React.createElement("div", { className, style, "data-aether-wrapper": "" }, element);
  }
  return element;
}

export const DecisionTreeRaw = __InnerComponent || DemoComponent;
export const DecisionTreeDemo = DemoComponent;

export default DecisionTree;
