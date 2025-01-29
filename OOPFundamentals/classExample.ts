class Point {
    x: number;
    y: number;

    draw(){
        console.log('X: ' +this.x+ ' Y: '+this.y);
    }
    getDistance(another: Point){
        //...
    }
}
// creating object and calling method draw()
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();