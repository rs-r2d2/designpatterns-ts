import { createSandbox, stub } from "sinon";
import { Rectangle, Square } from "../Rectangle";
import { useIt } from "../index";
import { expect } from "chai";

describe("Liskov Substitution Principle", () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    stub(console, "log").callsFake(() => {});
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("calculate area of rectangle and square", () => {
    const rect: Rectangle = new Rectangle(10, 20);
    const rectArea = useIt(rect);
    expect(rectArea).to.be.a("number").equal(100);
    /**
     * Is going to return incorrect area
     * since, setHeight changes both height and width to 10 ( 10 * 10 = 100)
     */
    const square: Square = new Square(5);
    const squareArea = useIt(square);
    expect(squareArea).to.be.a("number").equal(100).to.not.equal(50);
  });
});
