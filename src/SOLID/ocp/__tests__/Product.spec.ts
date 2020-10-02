import { Product, Color, Size } from "../Product";
import { BetterFilter } from "../BetterFilter";
import { ColorSpecification } from "../ColorSpecification";
import { AndSpecification } from "../AndSpecification";
import { SizeSpecification } from "../SizeSpecification";
import { expect } from "chai";

describe("Open Closed principle", () => {
  it("Product", () => {
    const apple: Product = new Product("Apple", Color.GREEN, Size.SMALL);
    expect(apple)
      .to.be.an("Object")
      .to.be.instanceOf(Product)
      .to.deep.contains({
        name: "Apple",
        color: Color.GREEN,
        size: Size.SMALL,
      });
  });
});
