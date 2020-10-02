import { Product, Color, Size } from "./Product";
import { ProductFilter } from "./ProductFilter";
import { BetterFilter } from "./BetterFilter";
import { ColorSpecification } from "./ColorSpecification";
import { AndSpecification } from "./AndSpecification";
import { SizeSpecification } from "./SizeSpecification";

export default async () => {
  const apple: Product = new Product("Apple", Color.GREEN, Size.SMALL);
  const tree: Product = new Product("Tree", Color.GREEN, Size.MEDIUM);
  const house: Product = new Product("House", Color.BLUE, Size.LARGE);
  const products: Product[] = [apple, tree, house];
  /**
   * Incorrect implementation of product filter.
   * Assume if we have more attributes.
   * - We will need to change ProductFilter.
   * - ProductFilter for each attribute and, their combination
   * will increase the number of functions in product filter
   */
  const pf: ProductFilter = new ProductFilter();
  console.log(`Green products(old) :`);
  pf.filterByColor(products, Color.GREEN).forEach((p) => {
    console.log(`${p.name} is green`);
  });
  console.log(`Medium and Green products(old) :`);
  pf.filterBySizeAndColor(products, Size.MEDIUM, Color.GREEN).forEach((p) => {
    console.log(`${p.name} is green and medium`);
  });

  /**
   * Correct Implementation of product filter.
   * Assume if we have more attributes.
   * - We can add more specification, but allows only filtering(Open Closed Principle)
   */
  const bf: BetterFilter = new BetterFilter();
  console.log(`Green products(new) :`);
  bf.filter(products, new ColorSpecification(Color.GREEN)).forEach((p) => {
    console.log(`${p.name} is green`);
  });
  console.log(`Medium and Green products(new) :`);
  bf.filter(
    products,
    new AndSpecification(
      new ColorSpecification(Color.GREEN),
      new SizeSpecification(Size.MEDIUM)
    )
  ).forEach((p) => {
    console.log(`${p.name} is green and medium`);
  });
};
