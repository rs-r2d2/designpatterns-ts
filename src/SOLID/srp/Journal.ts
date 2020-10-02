import { exception } from "console";

/**
 * Journal
 * @template J
 *
 * This class handles entry in the journal.
 */
class Journal {
  /**
   * Entries  of journal
   */
  private entries: string[] = [];

  /**
   * Adds entry
   * @param text
   */
  public addEntry(text: string) {
    this.entries.push(text);
  }

  /**
   * Removes entry
   * @param index
   */
  public removeEntry(index: number) {
    this.entries.splice(index, 1);
  }

  /**
   * Gets entries
   */
  public getEntries() {
    return this.entries;
  }

  /**
   * Override toString()
   * @returns
   */
  public toString() {
    let entriesString = "";
    this.entries.forEach((entry, index) => {
      entriesString += `${index}. ${entry}\n\r`;
    });
    return entriesString;
  }

  /**
   * Saves to file
   * @param J
   * This function could have been implemented here.
   * But, it violates single responsibility principle.
   */
  // public async saveToFile(J: Journal) {
  //   try {
  //     await fsPromises.writeFile("journal.txt", `${J}`);
  //   } catch (e) {
  //     console.error(e.message);
  //     throw e;
  //   }
  // }
}

export default Journal;
