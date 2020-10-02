import { Specification } from "./Products.interface";
import { Color, Product } from "./Product";

/**
 * Combined specification
 * @template T
 */
export class AndSpecification<T> implements Specification<T> {
  /**
   * Creates an instance of AND specification.
   * @param first
   * @param second
   */
  constructor(
    public first: Specification<T>,
    public second: Specification<T>
  ) {}

  /**
   * Determines whether satisfied is
   * @param item
   * @returns true if satisfied
   */
  isSatisfied(item: T): boolean {
    return this.first.isSatisfied(item) && this.second.isSatisfied(item);
  }
}
