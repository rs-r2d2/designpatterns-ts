import { Specification } from "./Products.interface";
import { Product, Size } from "./Product";

/**
 * Size specification
 */
export class SizeSpecification implements Specification<Product> {
  /**
   * Creates an instance of Size specification.
   * @param size
   */
  constructor(private size: Size) {}

  /**
   * Determines whether satisfied is
   * @param item
   * @returns true if satisfied
   */
  isSatisfied(item: Product): boolean {
    return item.size === this.size;
  }
}
