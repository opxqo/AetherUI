import * as React from "react";
import { AgentInbox, Button, toast } from "../../src/index.js";
import { AgentInbox as CleanInbox } from "../../src/clean.js";
import type { AgentTask, AgentInboxView } from "../../src/components/ui/agent-inbox.js";
import type { AgentInboxProps as CleanInboxProps } from "../../src/components/ui/clean/agent-inbox.js";
import { StepperForm, type Step } from "../../src/components/ui/stepper-form.js";

const task: AgentTask = { id: "review", title: "Review", agent: "Release", status: "waiting" };
const onViewChange = (view: AgentInboxView) => { const valid: "board" | "list" = view; return valid; };
const clean: CleanInboxProps = { tasks: [task], onViewChange };
const normal = <AgentInbox tasks={[task]} onViewChange={onViewChange} />;
const minimal = <Button id="save" type="submit" ref={React.createRef<HTMLButtonElement>()}>保存</Button>;
const cleanRender = <CleanInbox {...clean} />;
const demo = <AgentInbox demo />;
const toastId: string | number = toast.success("Saved", { onDismiss: id => console.log(id) });
const pending: Promise<number> = toast.promise(Promise.resolve(3), { loading: "Loading", success: value => String(value), error: error => String(error) });
const steps: Step<{ name: string }>[] = [{ id: "start", title: "Start", render: ({ values, setValues }) => <input value={values.name} onChange={event => setValues({ name: event.target.value })} /> }];
const form = <StepperForm steps={steps} initialValues={{ name: "" }} onComplete={values => { values.name.toUpperCase(); }} />;
// @ts-expect-error Unknown task states are not accepted.
const invalidTask: AgentTask = { ...task, status: "anything" };
// @ts-expect-error Views are string unions, not dictionaries.
const invalidView: AgentInboxView = {};
// @ts-expect-error Business callbacks must receive the actual task.
const invalidCallback = <AgentInbox onApprove={(value: number) => {}} />;
// @ts-expect-error Button variants are constrained.
const invalidButton = <Button variant="not-a-variant" />;
// @ts-expect-error Unknown component fields should not bypass checking.
const extra = <AgentInbox unsupportedProp="x" />;
// @ts-expect-error Input types remain typed inside generic step context.
const invalidStep: Step<{ name: string }> = { id: "invalid", title: "Invalid", render: ({ values }) => values.notThere };
