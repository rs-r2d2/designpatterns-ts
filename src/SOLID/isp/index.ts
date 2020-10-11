import Document from "./Document";
import Machine from "./Machine";
import Printer from "./Printer";
import MultiFunctionPrinter from "./MultiFunctionPrinter";
export default async () => {
  const doc = new Document("Some Secret Papers.");

  /**
   * Machine interface allows us to implement
   * machine with printing, scanning, faxing functionalities.
   *
   */
  const machine = new Machine();
  console.log("Machine is working.");
  machine.scan(doc);
  machine.fax(doc);
  machine.print(doc);
  /**
   * Separating interface allows us to implement
   *  machine with printing or scanning or faxing functionalities or mix of any these.
   *
   */
  const printer = new Printer();
  console.log("Printer is working.");
  printer.print(doc);

  const multiPrinter = new MultiFunctionPrinter();
  console.log("MultiFunctionPrinter is working.");
  multiPrinter.scan(doc);
  multiPrinter.print(doc);
};
