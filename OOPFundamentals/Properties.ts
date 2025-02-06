export class Point {        //when we use export, the Point class is available to import and use
    constructor(private _x: number,private _y: number){
    }
    draw(){
        console.log('X: ' +this._x+ ' Y: '+this._y);
    }
    //get Properties
    get x(){
        return this._x;
    }
    //set properties
    set x(value){
        if(value < 0)
            console.log('Value cannnot be less than zero');
        this._x = value;
    }
}
let point = new Point(1,2);
let x = point.x
point.x= 10;
point.draw();