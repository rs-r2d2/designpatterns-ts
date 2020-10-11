import Document from "../Document";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { createSandbox, stub } from "sinon";
import MultiFunctionPrinter from "../MultiFunctionPrinter";

chai.use(sinonChai);
describe("Interface Separation Principle", () => {
    const sandbox = createSandbox();
    const consoleStub = stub(console, "log");
    afterEach(() => {
        sandbox.restore();
        consoleStub.reset();
    });
    describe("MultiFunctionPrinter", () => {

            it("can print", () => {
                const doc = new Document("some secret content");
                expect(doc)
                    .to.be.instanceOf(Document)
                    .to.contain({ text: "some secret content" });
                const machine = new MultiFunctionPrinter();
                expect(machine).to.be.instanceOf(MultiFunctionPrinter);
                machine.print(doc);
                expect(consoleStub).to.calledOnceWith(`printing:${doc.text}`);
            });

            it("can scan", () => {
                const doc = new Document("some secret content");
                expect(doc)
                    .to.be.instanceOf(Document)
                    .to.contain({ text: "some secret content" });
                const machine = new MultiFunctionPrinter();
                expect(machine).to.be.instanceOf(MultiFunctionPrinter);
                machine.scan(doc);
                expect(consoleStub).to.calledOnceWith(`scanning:${doc.text}`);
            });
        });
});
