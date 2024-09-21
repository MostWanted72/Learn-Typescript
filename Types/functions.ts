function square(num: number) {
  return num * num;
}

function Greeting(person: string = 'stranger') {
  return `Hi there, ${person}`;
}

console.log("The person's says ", Greeting("praveen"), square(12))

const doSomething = (person: string, age: number, isFunny: boolean) => {
  console.log(`${person} is ${isFunny ? 'funny' : 'not funny'} and his or her age is ${age}`)
}

// creating a function with return type
const addSums = (x: number, y: number): number => {
  return x + y;
}

addSums(2, 5);

// void type  ---> return type either null or undefined
const printTwice = (msg: string): void => {
  console.log(msg);
  console.log(msg);
}

// never ---> never return anything, function either throw error or runs continuesly
const checkSum = (x: number, y: number): void => {
  if (x + y === 5) {
    console.log('yes');
  } else {
    console.log('no')
  }
}

// object type
const person = (person: { firstName: string, lastName: string}): void => {
  console.log(`${person.firstName} ${person.lastName}`)
}

// type alias 
type Point = {
  x: number,
  y: number,
}

let coordinates: Point = { x: 3, y: 5}


// Type unknown a better alternative to any type

let x: unknown;
x = 23;
x = "praveen";

if (typeof x === "string") {   
  console.log(x)    // type of x is automatically string here 
}
if (typeof x === 'number') {
  console.log(x.toFixed(2))   // type of x is number automatically here
}


// arrays

const fruites: string[] = ['apple', 'banana'] // array of strings this will only contain string


const cars: readonly string[] = ['bmw', 'honda', 'maruti']  // readonly will prevent it from changing it