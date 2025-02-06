"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        //get Properties
        get: function () {
            return this._x;
        },
        //set properties
        set: function (value) {
            if (value < 0)
                console.log('Value cannnot be less than zero');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
var point = new Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
