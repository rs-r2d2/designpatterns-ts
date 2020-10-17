import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

export const useIt = (r: Rectangle): number => {
  const width: number = r.getWidth();
  r.setHeight(10);
  console.log(`Expected area of ${width * 10}, actual is ${r.getArea()}`);
  console.log(
    `Solution is to use isSquare method in 
    Rectangle class or implement factory for Rectangle and Square class implementation`
  );
  return r.getArea();
};

export default async () => {
  const rect: Rectangle = new Rectangle(10, 20);
  useIt(rect);
  /**
   * Is Going to return incorrect area
   * since, setHeight changes both height and width to 10 ( 10 * 10 = 100)
   */
  const square: Square = new Square(5);
  useIt(square);
};
