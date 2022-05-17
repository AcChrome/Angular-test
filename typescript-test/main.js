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
*/
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var COlorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
