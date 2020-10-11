import PrinterInterface from "./Printer.interface";
import Document from "./Document";

/**
 * Printer
 */
export default class Printer implements PrinterInterface {
  /**
   * Prints printer
   * @param content -
   */
  print(content: Document): void {
    console.log(`'printing: ${content.text}`);
  }
}
