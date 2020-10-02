import { Product, Color, Size } from "../Product";
import { ColorSpecification } from "../ColorSpecification";
import { expect } from "chai";

describe("Open Closed principle", () => {
  it("Color Specification", () => {
    const spec = new ColorSpecification(Color.GREEN);
    expect(spec)
      .to.be.an("Object")
      .to.be.instanceOf(ColorSpecification)
      .to.deep.contains({ color: Color.GREEN });
    const apple: Product = new Product("Apple", Color.GREEN, Size.SMALL);
    expect(spec.isSatisfied(apple)).to.be.true;
    const house: Product = new Product("House", Color.BLUE, Size.LARGE);
    expect(spec.isSatisfied(house)).to.be.false;
  });
});
