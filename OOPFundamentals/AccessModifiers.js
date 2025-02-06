var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //constructor(x?: number,y?: number){}  When we add ?, the constructor parameters are optional
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point;
}());
// creating object and calling method draw()
var point = new Point(1, 2);
// point.x = 2;  here x is prive , compilation error
//let point2 = new Point();
point.draw();
