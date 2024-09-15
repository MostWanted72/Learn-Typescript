function square(num: number) {
  return num * num;
}

function Greeting(person: string) {
  return `Hi there, ${person}`;
}

console.log("The person's says ", Greeting("praveen"), square(12))

const doSomething = (person: string, age: number, isFunny: boolean) => {
  console.log(`${person} is ${isFunny ? 'funny' : 'not funny'} and his or her age is ${age}`)
}

