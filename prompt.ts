import prompts, { PromptObject, PromptType } from "prompts";
import { patterns, list } from "./patterns";

(async () => {
  const question: PromptObject = {
    type: "number",
    name: "patternIndex",
    message: `Which pattern do you want to execute ? ${list}`,
  };
  const onCancel = () => {
    return false;
  };
  const onSubmit = async (_prompt: PromptObject, answer: PromptType) => {
    const pattern = patterns[answer];
    if (pattern) {
      await pattern.f();
    } else {
      console.log("Incorrect option.");
    }
    console.log("Resetting..");
    await prompts(question, { onCancel, onSubmit });
  };
  await prompts(question, { onCancel, onSubmit });
})();
