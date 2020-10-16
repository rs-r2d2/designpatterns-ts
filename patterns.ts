import isp from "./src/SOLID/isp";
import lsp from "./src/SOLID/lsp";
import ocp from "./src/SOLID/ocp";
import srp from "./src/SOLID/srp";
import dip from "./src/SOLID/dip";

export const patterns: any = {
  1: { n: "SOLID:: Single Responsibility Principle", f: srp },
  2: { n: "SOLID:: Open Closed Principle", f: ocp },
  3: { n: "SOLID:: Liskov Substitution Principle", f: lsp },
  4: { n: "SOLID:: Interface Separation Principle", f: isp },
  5: { n: "SOLID:: Dependency Inversion Principle", f: dip}
};

export let list = "";
Object.getOwnPropertyNames(patterns).forEach((prop) => {
  const pattern = patterns[prop];
  list += ` \n ${prop} ${pattern.n}\n`;
});
