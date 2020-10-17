import {Rectangle} from "./Rectangle";

/**
 * Square
 */
export class Square extends Rectangle {
    /**
     * Creates an instance of square.
     * @param size -
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
     * @param s -
     */
    public setSize(s: number) {
        this.size = s;
        this.setHeight(s);
        this.setWidth(s);
    }

    /**
     * Sets height
     * @param h -
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
     * @param w -
     *
     * This function breaks Liskov Substitution Principle
     */
    public setWidth(w: number) {
        super.setWidth(w);
        super.setHeight(w);
    }
}
