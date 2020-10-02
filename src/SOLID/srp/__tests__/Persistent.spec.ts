import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import sinonChai from "sinon-chai";
import { createSandbox, SinonStub, stub } from "sinon";

import Journal from "../Journal";
import Persistent, { fsPromises } from "../Persistent";

chai.use(chaiAsPromised);
chai.use(sinonChai);
const { expect } = chai;

describe("Single Responsibility Principle", () => {
  describe("Persistent", () => {
    const sandbox = createSandbox();
    let fsStub: SinonStub;
    beforeEach(() => {
      fsStub = stub(fsPromises, "writeFile").resolves(true);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it("save journal entries", async () => {
      const j = new Journal();
      const text1 = "Entry added 1";
      const text2 = "Entry added 2";
      j.addEntry(text1);
      j.addEntry(text2);
      expect(j.getEntries()).to.be.a("array").to.have.length(2);
      const p = new Persistent();
      await expect(p.saveToFile(j)).to.eventually.fulfilled;
      expect(fsStub).to.calledWith("journal.txt", `${j}`);
    });
  });
});
