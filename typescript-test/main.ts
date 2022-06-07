/*
function log(message) {
  console.log(message);
}

var message = 'Hello World';

log(message);

var number = 1;
let count = 2;


function doSomething() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Finally: ' + i);
}

doSomething();


let count = 5;

count = 'a';

let a: number;
a = 1;
a = true;
a = 'a';


let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const COlorBlue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3,
}
let backgroundColor = Color.Red;


let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');


let log = function (message) {
  console.log(message);
};

let doLog = (message) => {
  console.log(message);
};

let doLog1 = (message) => console.log(message);
let doLog2 = () => console.log();


let drawPoint = (point) => {
  // ...
};

drawPoint({
  name: 'Mosh',
});

let drawPoint = (point: Point) => {
  // ...
};

let getDistance = (pointA: PointerEvent, pointB: Point) => {
  // ...
};

drawPoint({
  x: 1,
  y: 2,
});


// Object

class Point {
  x: number;
  y: number;
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }

  getDistance(another: Point) {
    // ...
  }
}

let point: Point = new Point();
point.x = 1;
point.y = 2;
point.draw();


//Constructor

class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point();
point.draw();


// Access modifier

class Point {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);
point.draw();


//Access modifier paramenters

class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);
point.draw();


// Properties

class Point {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log('X: ' + this._x + ', Y: ' + this._y);
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) throw new Error('value cannot be less than 0.');
    this._x = value;
  }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
*/

// module
import { Point } from './point';

let point = new Point(1, 2);
point.draw();
