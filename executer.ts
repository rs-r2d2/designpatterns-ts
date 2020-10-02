import { patterns, list } from "./patterns";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt() {
  rl.question(
    `Which pattern do you want to execute ? ${list}`,
    async (index: string) => {
      console.log(index);
      const pattern = patterns[index];
      if (pattern) {
        await pattern.f();
      } else {
        console.log("Incorrect option");
      }
      prompt();
    }
  );
}

rl.on("close", function () {
  console.log("Executer exited");
  process.exit(0);
});

prompt();
