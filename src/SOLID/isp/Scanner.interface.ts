import Document from "./Document";
/**
 * Scanner interface
 */
export default interface ScannerInterface {
  /**
   *
   * @param content -
   */
  scan(content: Document): void;
}
