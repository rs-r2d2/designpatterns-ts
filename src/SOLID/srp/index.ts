import Journal from "./Journal";
import Persistent from "./Persistent";

export default async () => {
  const journal = new Journal();
  journal.addEntry("Learn Typescript");
  journal.addEntry("Learn SRP");
  journal.addEntry("Learn Prompt");
  journal.addEntry("Added Nodemon");
  journal.removeEntry(3);
  console.log(journal);
  try {
    const persist = new Persistent();
    await persist.saveToFile(journal);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
