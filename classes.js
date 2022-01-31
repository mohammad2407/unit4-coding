class Rectangle {
    constructor(side1,side2){
        this.area = side1*side2
        this.perimeter = (side1*side2)/2
    }
   
}

class Square extends Rectangle{
    constructor(side){
        super(side,side)
        
    }
}
    console.log(new Square(3).area)
    console.log(new Square(3).perimeter)
