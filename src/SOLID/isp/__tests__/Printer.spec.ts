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
    describe("Printer", () => {
        it("can print", () => {
            const doc = new Document("some secret content");
            expect(doc)
                .to.be.instanceOf(Document)
                .to.contain({ text: "some secret content" });
            const machine = new Machine();
            expect(machine).to.be.instanceOf(Machine);
            machine.print(doc);
            expect(consoleStub).to.calledOnceWith(`printing:${doc.text}`);
        });
    });
});
