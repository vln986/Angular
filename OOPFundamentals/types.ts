let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]=[1,2,3];
let f: any[] = [1, true, 'a', false];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum color {Red = 0,Green = 1,Blue = 2,Purple = 3};
let backgroundColor = color.Purple;

//Type assertions
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');