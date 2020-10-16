import Document from "./Document";
/**
 * Machine interface
 */
export default interface MachineInterface {
  /**
   *
   * @param content -
   */
  print(content: Document): void;
  /**
   *
   * @param content -
   */
  scan(content: Document): void;
  /**
   *
   * @param content -
   */
  fax(content: Document): void;
}
