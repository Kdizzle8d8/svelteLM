import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config({ path: "../../.env" });

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) throw new Error("OPENAI_API_KEY is not set in the environment variables");

const client = new OpenAI({ apiKey });

const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
  { role: "system", content: "You are a helpful assistant", name: "system" },
];

class Conversation {
  private messages: OpenAI.Chat.ChatCompletionMessageParam[] = [];
  private model: string = "gpt-4o";
  private temperature: number = 0;
  aiTools: OpenAI.Chat.ChatCompletionTool[] = [];
  tsFunctions: Record<string, Function> = {};

  constructor(messages: OpenAI.Chat.ChatCompletionMessageParam[]) {
    this.messages = messages;
  }

  async chat(message: string) {
    this.messages.push({ role: "user", content: message });
    let loops=0;
    try {
      while (true) {
        loops++;
        const { choices } = await client.chat.completions.create({
          model: this.model,
          messages: this.messages,
          temperature: this.temperature,
          tools: this.aiTools,
          tool_choice: "auto",
          max_tokens: 1000,
        });

        const assistantMessage = choices[0].message;
        this.messages.push(assistantMessage);

        // If there are no tool calls, return the content
        if (!assistantMessage.tool_calls?.length) {
          if (assistantMessage.content === null) {
            throw new Error("Unexpected message format from OpenAI API");
          }
          return assistantMessage.content;
        }

        // If there are tool calls, handle them
        for (const { type, function: func, id } of assistantMessage.tool_calls) {
          if (type === 'function') {
            const targetFunction = this.tsFunctions[func.name];
            if (!targetFunction) throw new Error(`Function ${func.name} not found`);
            
            const functionResult = targetFunction(JSON.parse(func.arguments));
            this.messages.push({
              role: "tool",
              content: JSON.stringify(functionResult),
              tool_call_id: id
            });
          }
        }
      }
    } catch (error) {
      console.error("Error in chat completion:", error);
      console.log(loops)
      throw error;
    }
  }
}

const add = ({ a, b }: { a: number; b: number }) => {
  return a + b;
};

// Initialize the conversation with tools
const convo = new Conversation(messages);
convo.tsFunctions = { add };
convo.aiTools = [
  {
    type: "function",
    function: {
      name: "add",
      description: "returns the sum of two numbers",
      parameters: {
        type: "object",
        properties: {
          a: { type: "number" },
          b: { type: "number" },
        },
        required: ["a", "b"],
      },
    },
  },
];

convo.chat("What is the sum of 9 and 10 + the sum of 11 and 12?").then((res) => {
  console.log(res);
});