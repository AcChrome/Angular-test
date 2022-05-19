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
*/

let log = function (message) {
  console.log(message);
};

let doLog = (message) => {
  console.log(message);
};

let doLog1 = (message) => console.log(message);
let doLog2 = () => console.log();
