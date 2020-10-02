export const fsPromises = require("fs").promises;
import Journal from "./Journal";

/**
 * Persistent
 */
class Persistent {
  /**
   * Saves to file
   * @param J
   */
  public async saveToFile(J: Journal) {
    try {
      await fsPromises.writeFile("journal.txt", `${J}`);
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }
}

export default Persistent;
