import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-T2vp62ci.js";

/**
 * Agent Cursors (Agents)
 * Agents working in a document like teammates in a multiplayer editor – live pointers with names, suggestions typed letter by letter, images they resize, code they fix and comments beside the page
 */
export function AgentCursors(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentCursorsRaw = __InnerComponent || DemoComponent;
export const AgentCursorsDemo = DemoComponent;
export const acceptSuggestion = AgentCursors;
export default AgentCursors;
