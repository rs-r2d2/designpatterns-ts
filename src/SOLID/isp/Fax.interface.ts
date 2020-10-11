import Document from "./Document";
/**
 * Fax interface
 */
export default interface FaxInterface {
  /**
   *
   * @param content - Document with contents
   */
  fax(content: Document): void;
}
