let apples: number = 5;

apples = 10;

const colors: string[] = ['red', 'green', 'blue'];

// class
class Car {}
const car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 3,
  y: 5,
};

// funtion
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when do you use anotations
// 1) when the functions returns any type
const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: 10; y: 20 } = JSON.parse(json);

console.log(json);

// 2) when we declare the variable in one line
// ande initialize in another
let words = ['green', 'red', 'blue'];
let foundWords: boolean;

for (let i = 0; i < words.length; i += 1) {
  if (words[i] === 'blue') {
    foundWords = true;
  }
}
