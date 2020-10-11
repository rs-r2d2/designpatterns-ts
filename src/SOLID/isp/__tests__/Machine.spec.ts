import Machine from "../Machine";
import Document from "../Document";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { createSandbox, stub } from "sinon";

chai.use(sinonChai);
describe("Interface Separation Principle", () => {
  const sandbox = createSandbox();
  const consoleStub = stub(console, "log");
  afterEach(() => {
    sandbox.restore();
    consoleStub.reset();
  });
  describe("Machine", () => {
    it("can print", () => {
      const doc = new Document("some secret content");
      expect(doc)
        .to.be.instanceOf(Document)
        .to.contain({ text: "some secret content" });
      const machine = new Machine();
      expect(machine).to.be.instanceOf(Machine);
      machine.fax(doc);
      expect(consoleStub).to.calledOnceWith(`faxing:${doc.text}`);
    });

    it("can scan", () => {
      const doc = new Document("some secret content");
      expect(doc)
          .to.be.instanceOf(Document)
          .to.contain({ text: "some secret content" });
      const machine = new Machine();
      expect(machine).to.be.instanceOf(Machine);
      machine.scan(doc);
      expect(consoleStub).to.calledOnceWith(`scanning:${doc.text}`);
    });

    it("can fax", () => {
      const doc = new Document("some secret content");
      expect(doc)
          .to.be.instanceOf(Document)
          .to.contain({ text: "some secret content" });
      const machine = new Machine();
      expect(machine).to.be.instanceOf(Machine);
      machine.fax(doc);
      expect(consoleStub).to.calledOnceWith(`faxing:${doc.text}`);
    });
  });
});
