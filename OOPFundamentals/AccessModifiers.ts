class Point {
    private x: number;  // x is private accessible only within the class
    y: number;

    constructor(x: number,y: number){
        this.x = x;
        this.y = y;
    }
    //constructor(x?: number,y?: number){}  When we add ?, the constructor parameters are optional

    draw(){
        console.log('X: ' +this.x+ ' Y: '+this.y);
    }
}
// creating object and calling method draw()
let point = new Point(1,2);
// point.x = 2;  here x is prive , compilation error
//let point2 = new Point();
point.draw();