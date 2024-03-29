import { createSandbox, stub } from "sinon";
import { Rectangle } from "../Rectangle";
import { useIt } from "../index";
import { expect } from "chai";
import {Square} from "../Square";

describe("Liskov Substitution Principle", () => {
  const sandbox = createSandbox();
  stub(console, "log").callsFake(() => {});

  afterEach(() => {
    sandbox.restore();
  });

  it("calculate area of rectangle", () => {
    const rect: Rectangle = new Rectangle(10, 20);
    expect(rect)
      .to.be.an("Object")
      .that.is.an.instanceOf(Rectangle)
      .deep.includes({ width: 10, height: 20 });
    const rectArea = useIt(rect);
    expect(rectArea).to.be.a("number").equal(100);
  });

  it("calculate area of  square", () => {
    /**
     * Is going to return incorrect area
     * since, setHeight changes both height and width to 10 ( 10 * 10 = 100)
     */
    const square: Square = new Square(5);
    expect(square)
        .to.be.an("Object")
        .that.is.an.instanceOf(Square)
        .that.is.an.instanceOf(Rectangle)
        .deep.includes({ width: 5, height: 5 });
    const squareArea = useIt(square);
    expect(squareArea).to.be.a("number").equal(100).to.not.equal(50);
  });
});
