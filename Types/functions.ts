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

