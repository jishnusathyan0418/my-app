import { agent, Workflow } from "@llamaindex/workflow";
import { openai } from "@llamaindex/openai";
export const chatEngine = workflow({
  // Your workflow logic here
  // This is a basic example
  name: "chat",
  run: async ({ start, end }) => {
    start("chat started");
    // Example agent
    const myAgent = agent({
      llm: openai(),
      tools: [wikipedia()],
      verbose: true,
    });
    // Example chat loop
    const userMessage = "What is the capital of France?";
    const response = await myAgent.run(userMessage);
    end(response);
  },
});

function workflow(arg0: {
    // Your workflow logic here
    // This is a basic example
    name: string; run: ({ start, end }: { start: any; end: any; }) => Promise<void>;
}) {
    throw new Error("Function not implemented.");
}


function wikipedia(): import("llamaindex").BaseToolWithCall {
    throw new Error("Function not implemented.");
}
