import { Product, Color, Size } from "../Product";
import { BetterFilter } from "../BetterFilter";
import { ColorSpecification } from "../ColorSpecification";
import { AndSpecification } from "../AndSpecification";
import { SizeSpecification } from "../SizeSpecification";
import { expect } from "chai";

describe("Open Closed principle", () => {
  it("Better Filter", () => {
    const apple: Product = new Product("Apple", Color.GREEN, Size.SMALL);
    const tree: Product = new Product("Tree", Color.GREEN, Size.MEDIUM);
    const house: Product = new Product("House", Color.BLUE, Size.LARGE);
    const products: Product[] = [apple, tree, house];
    const bf: BetterFilter = new BetterFilter();
    expect(bf.filter(products, new ColorSpecification(Color.GREEN)))
      .to.be.an("array")
      .to.deep.equal([apple, tree]);
    expect(
      bf.filter(
        products,
        new AndSpecification(
          new ColorSpecification(Color.GREEN),
          new SizeSpecification(Size.MEDIUM)
        )
      )
    )
      .to.be.an("array")
      .to.deep.equal([tree]);
  });
});
