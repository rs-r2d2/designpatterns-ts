import Document from "./Document";
/**
 * Printer interface
 */
export default interface PrinterInterface {
  /**
   *
   * @param content -
   */
  print(content: Document): void;
}
