//complete this code
class Rectangle {
	constructor(width, height) {
		if (width <= 0 || height <= 0) {
			throw new Error("Width and height must be positive integers.");
		}
		this.width = width;
		this.height = height;
	}

	get widthValue() {
		return this.width;
	}

	get heightValue() {
		return this.height;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side) {
		if (side <= 0) {
			throw new Error("Side must be a positive integer.");
		}
		super(side, side); // Call parent constructor with side for both width & height
	}

	getPerimeter() {
		return 4 * this.width; // Use inherited width (same as side)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
