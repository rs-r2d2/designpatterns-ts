/**
 * Color
 */
export enum Color {
  RED,
  GREEN,
  BLUE,
}

/**
 * Size
 */
export enum Size {
  SMALL,
  MEDIUM,
  LARGE,
  HUGE,
}

/**
 * Product
 */
export class Product {
  /**
   * Creates an instance of product.
   * @param name -
   * @param color -
   * @param size -
   */
  constructor(public name: string, public color: Color, public size: Size) {}
}
