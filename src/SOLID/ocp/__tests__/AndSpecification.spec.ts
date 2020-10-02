import { Product, Color, Size } from "../Product";
import { expect } from "chai";
import { SizeSpecification } from "../SizeSpecification";
import { AndSpecification } from "../AndSpecification";
import { ColorSpecification } from "../ColorSpecification";

describe("Open Closed principle", () => {
  it("And Specification", () => {
    const sizeSpec = new SizeSpecification(Size.SMALL);
    const colorSpec = new ColorSpecification(Color.GREEN);
    expect(sizeSpec);
    expect(colorSpec);
    const apple: Product = new Product("Apple", Color.GREEN, Size.SMALL);
    const house: Product = new Product("House", Color.BLUE, Size.LARGE);
    const spec = new AndSpecification(sizeSpec, colorSpec);
    expect(spec).to.be.an("Object").to.be.instanceOf(AndSpecification);
    expect(spec.first)
      .to.be.an("Object")
      .to.be.instanceOf(SizeSpecification)
      .to.deep.contains({ size: Size.SMALL });
    expect(spec.second)
      .to.be.an("Object")
      .to.be.instanceOf(ColorSpecification)
      .to.deep.include({ color: Color.GREEN });
    expect(spec.isSatisfied(apple)).to.be.true;
    expect(spec.isSatisfied(house)).to.be.false;
  });
});
