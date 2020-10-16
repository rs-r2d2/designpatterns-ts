import MachineInterface from "./Machine.interface";
import Document from "./Document";
/**
 * Machine
 */
export default class Machine implements MachineInterface {
  /**
   * Prints machine
   * @param content -
   */
  public print(content: Document): void {
    console.log(`printing:${content.text}`);
  }

  /**
   * Scans machine
   * @param content - Document wih content
   */
  public scan(content: Document): void {
    console.log(`scanning:${content.text}`);
  }

  /**
   * Fax machine
   * @param content -
   */
  public fax(content: Document): void {
    console.log(`faxing:${content.text}`);
  }
}
