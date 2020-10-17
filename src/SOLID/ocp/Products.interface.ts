/**
 * Enforce Open Closed Principle,
 * [Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification]
 *
 */

/**
 * Specification
 *
 * @remarks
 * Allows us to implement any kind of filters or combination of filters, makes it open
 * for extension.
 *
 * @param T -
 */
export interface Specification<T> {
  isSatisfied(item: T): boolean;
}

/**
 * Filter
 *
 * @remarks
 * Makes the implementation closed for modification.
 * @param T -
 * @param Specification -
 */
export interface Filter<T> {
  filter(items: T[], spec: Specification<T>): T[];
}
