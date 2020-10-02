import { Product, Color, Size } from "../Product";
import { expect } from "chai";
import { SizeSpecification } from "../SizeSpecification";

describe("Open Closed principle", () => {
  it("Size Specification", () => {
    const spec = new SizeSpecification(Size.SMALL);
    expect(spec)
      .to.be.an("Object")
      .to.be.instanceOf(SizeSpecification)
      .to.deep.contains({ size: Size.SMALL });
    const apple: Product = new Product("Apple", Color.GREEN, Size.SMALL);
    expect(spec.isSatisfied(apple)).to.be.true;
    const house: Product = new Product("House", Color.BLUE, Size.LARGE);
    expect(spec.isSatisfied(house)).to.be.false;
  });
});
