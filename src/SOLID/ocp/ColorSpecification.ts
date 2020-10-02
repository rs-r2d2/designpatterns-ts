import { Specification } from "./Products.interface";
import { Product, Color } from "./Product";

/**
 * Color specification
 */
export class ColorSpecification implements Specification<Product> {
  /**
   * Creates an instance of color specification.
   * @param color
   */
  constructor(private color: Color) {}

  /**
   * Determines whether satisfied is
   * @param item
   * @returns true if satisfied
   */
  isSatisfied(item: Product): boolean {
    return item.color === this.color;
  }
}
