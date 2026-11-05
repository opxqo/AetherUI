import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-B0whtqPR.js";

/**
 * Decision Tree [Clean Style] (Agents)
 * An agent stuck on a decision lays out its options as a tree – the consequences of each branch, the risky ones marked, its own pick highlighted – and you choose a path or write your own
 */
export function DecisionTree(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const DecisionTreeRaw = __InnerComponent || DemoComponent;
export const DecisionTreeDemo = DemoComponent;

export default DecisionTree;
