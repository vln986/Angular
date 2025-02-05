class Point {
    x: number;
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
//let point2 = new Point();
point.draw();