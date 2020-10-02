import { Filter, Specification } from "./Products.interface";
import { Product } from "./Product";

export class BetterFilter implements Filter<Product> {
  public filter(products: Product[], spec: Specification<Product>): Product[] {
    return products.filter((p) => spec.isSatisfied(p));
  }
}
