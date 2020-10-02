import { expect } from "chai";
import Journal from "../Journal";

describe("Single Responsibility Principle", () => {
  describe("Journal", () => {
    it("can add entries", () => {
      const j = new Journal();
      const text = "Entry added";
      j.addEntry(text);
      expect(j.getEntries()).to.be.a("array").to.have.length(1);
      expect(j.getEntries()[0]).to.be.a("string").to.be.equal(text);
    });

    it("can remove entries", () => {
      const j = new Journal();
      const text = "Entry to be removed";
      j.addEntry(text);
      expect(j.getEntries()).to.be.a("array").to.have.length(1);
      j.removeEntry(0);
      expect(j.getEntries()).to.be.a("array").to.have.length(0);
    });

    it("can get entries", () => {
      const j = new Journal();
      const text1 = "Entry 1";
      const text2 = "Entry 2";
      j.addEntry(text1);
      j.addEntry(text2);
      expect(j.getEntries())
        .to.be.a("array")
        .to.have.length(2)
        .to.deep.equal([text1, text2]);
    });
  });
});
