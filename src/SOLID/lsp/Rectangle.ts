/**
 * Rectangle
 */
export class Rectangle {
  /**
   * Creates an instance of rectangle.
   * @param width
   * @param height
   */
  constructor(protected width: number, protected height: number) {}

  /**
   * Sets width
   * @param w
   * @returns width
   */
  public setWidth(w: number) {
    this.width = w;
  }

  /**
   * Sets height
   * @param h
   * @returns height
   */
  public setHeight(h: number) {
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

/**
 * Square
 */
export class Square extends Rectangle {
  /**
   * Creates an instance of square.
   * @param size
   */
  constructor(private size: number) {
    super(size, size);
  }

  /**
   * Gets size
   * @returns
   */
  public getSize() {
    return this.size;
  }

  /**
   * Sets size
   * @param s
   */
  public setSize(s: number) {
    this.size = s;
    this.setHeight(s);
    this.setWidth(s);
  }

  /**
   * Sets height
   * @param h
   * @returns height
   *
   * This function breaks Liskov Substitution Principle
   */
  public setHeight(h: number) {
    super.setWidth(h);
    super.setHeight(h);
  }

  /**
   * Sets width
   * @param w
   *
   * This function breaks Liskov Substitution Principle
   */
  public setWidth(w: number) {
    super.setWidth(w);
    super.setHeight(w);
  }
}
