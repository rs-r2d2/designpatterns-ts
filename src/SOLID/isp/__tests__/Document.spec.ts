import { expect } from "chai";
import Document from "../Document";
describe("Interface Separation Principle", () => {
  it("Document", () => {
    const doc = new Document("some secret content");
    expect(doc)
      .to.be.instanceOf(Document)
      .to.contain({ text: "some secret content" });
  });
});
