/**
 * Specification
 * @template T
 */
export interface Specification<T> {
  isSatisfied(item: T): boolean;
}

/**
 * Filter
 * @template T
 */
export interface Filter<T> {
  filter(items: T[], spec: Specification<T>): T[];
}
