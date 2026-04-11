// src/inngest/functions.ts
import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit";

export const processTask = inngest.createFunction(
  { id: "agent/mewowowow", triggers: { event: "app/task.created" } },
  async ({ event, step }) => {
    const sampleAgent = createAgent({
      name: "sample-agent",
      description: "Sample Agent to demonstrate",
      system: "You are helpful assistant",
      model: gemini({ model: "gemini-2.5-flash" }),
    });

    const { output } = await sampleAgent.run("What is Next.js ??");
    return {
      message: output[0].content,
    };
  },
);

const model = gemini({ model: "gemini-1.5-flash" });
