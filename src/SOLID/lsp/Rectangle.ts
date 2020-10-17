/**
 * Rectangle
 */
export class Rectangle {
  /**
   * Creates an instance of rectangle.
   * @param width -
   * @param height -
   */
  constructor(protected width: number, protected height: number) {}

  /**
   * Sets width
   * @param w -
   * @returns width
   */
  public setWidth(w: number): void {
    this.width = w;
  }

  /**
   * Sets height
   * @param h -
   * @returns height
   */
  public setHeight(h: number): void {
    this.height = h;
  }
  /**
   * Gets width
   * @returns width
   */
  public getWidth(): number {
    return this.width;
  }

  /**
   * Gets height
   * @returns height
   */
  public getHeight(): number {
    return this.height;
  }

  /**
   * Gets area
   * @returns area
   */
  public getArea(): number {
    return this.width * this.height;
  }

  /**
   * Determines whether is square
   * @returns true if square
   */
  public isSquare(): boolean {
    return this.height === this.width;
  }
}

