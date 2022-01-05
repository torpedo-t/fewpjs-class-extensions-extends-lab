// Your code here
class Polygon {
    constructor(array) {
        this.sides = array
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        // returns the sum of all elements in array
        // this.array = [5, 5, 5]
        // console.log(this.array)
        let reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.sides.reduce(reducer, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count !== 3) return;
        // console.log(this.sides[0] + this.sides[1] > this.sides[2])
        // console.log(this.sides[0] + this.sides[1] < this.sides[2])
        return this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1];
        // the sum of the lengths of any two sides of a triangle is > than the length of the third side
        // if that is not true, then it is not a triangle
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count !== 4) return;
        // console.log(this.sides[0], this.sides[1])
        return this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3];
        // the length of all sides must be equal
        // if that is not true, then it is not a square
    }

    get area() {
        if (!this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3]) return;
        return this.sides[0] * this.sides[1]
        // console.log(this)
    }
}