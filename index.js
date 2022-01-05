// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        // returns the sum of all elements in array
        // this.array = [5, 5, 5]
        // console.log(this.array)
        let reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.array.reduce(reducer, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        // the sum of the lengths of any two sides of a triangle is > than the length of the third side
        // if that is not true, then it is not a triangle
    }
}

class Square extends Polygon {
    get isValid() {
        // the length of all sides must be equal
        // if that is not true, then it is not a square
    }

    get area() {
        // multiply array[0] with array[1]
    }
}