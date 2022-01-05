// Your code here
class Polygon {
    constructor(array) {
        this.array = array
        this.count = this.array.length
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
        // console.log(this.count)
        if (this.count !== 3) return;
        // if (this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0] && this.array[0] + this.array[2] > this.array[1]) return;
        // the sum of the lengths of any two sides of a triangle is > than the length of the third side
        // if that is not true, then it is not a triangle
    }
}

class Square extends Polygon {
    get isValid() {
        // associate a variable with the element in the first index
        // find the sum of the array
        // if the square root of the sum of the array is equal to the variable associated with the first element, and the second element then it's a square
        // the length of all sides must be equal
        // if that is not true, then it is not a square
    }

    get area() {
        // multiply array[0] with array[1]
    }
}