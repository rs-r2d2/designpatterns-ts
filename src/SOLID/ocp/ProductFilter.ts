import { Color, Product, Size } from "./Product";

/**
 * Product filter
 */
export class ProductFilter {
  /**
   * Filters by color
   * @param products
   * @param color
   * @returns by color
   */
  public filterByColor(products: Product[], color: Color): Product[] {
    return products.filter((product) => product.color === color);
  }

  /**
   * Filters by size
   * @param products
   * @param size
   * @returns by size
   */
  public filterBySize(products: Product[], size: Size): Product[] {
    return products.filter((product) => product.size === size);
  }

  /**
   * Filters by size and color
   * @param products
   * @param size
   * @param color
   * @returns by size and color
   */
  public filterBySizeAndColor(
    products: Product[],
    size: Size,
    color: Color
  ): Product[] {
    return products.filter(
      (product) => product.size === size && product.color === color
    );
  }
}
