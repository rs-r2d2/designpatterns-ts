import ocp from "./src/SOLID/ocp";
import srp from "./src/SOLID/srp";

export const patterns: any = {
  1: { n: "Single Responsibility Principle", f: srp },
  2: { n: "Open closed principle", f: ocp },
};
export let list = "";
Object.getOwnPropertyNames(patterns).forEach((prop) => {
  const pattern = patterns[prop];
  list += ` \n ${prop} ${pattern.n}\n`;
});
