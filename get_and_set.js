//GETERS AND SETTERS
class Square {
    constructor (_width){
        this.height = _width;
        this.width = _width;
        this.requestsForArea = 0;
    }

    get area() {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;
       
    }
}
 
let square1 = new Square(7);
//Get area
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.requestsForArea);


//set width and height 
square1.area = 25;
console.log(square1.width);
console.log(square1.height);