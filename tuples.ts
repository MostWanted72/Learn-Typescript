const drink = {
  color: 'brows',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

// gives error as pepsi is a tuple, order cannot be changed
// pepsi[0] = 4;

// type aliasing
type Drink = [string, boolean, number];

const tea: Drink = ['black', false, 31];


// in tuple we have to define type of each element, but if an element is pushed to the tuple then that element looses type safety 

let cars1: [string, string];
cars1 = ['bmw', 'bentely']

cars1.push('prshe')

// destructuring the tuple
const graph: [number, number] = [12, 12];
const [x1, y1] = graph;

// can infer the object type

const person1: { name: string } = {
  name: 'praveen'
}

// index signature
const myObj : {[ index: string] : number } = {};

myObj.car1 = 2;
myObj.car2 = 4;

// I want to do programming

// type intersection
type Color = {
  color: string
}

type Size = {
  size: number
}

type PersonSkinColor = Color & Size;

const personSkinColor : PersonSkinColor = {
  color: 'black',
  size: 4,
}

type Movie = {
  readonly title: string,
  originalTitle?: string,
  director: string,
  releaseYear: number,
  boxOffice: {
    budget: number,
    grosses: number,
    grossWorldWide: number
  } 
}

const dune: Movie = {
  title: 'Dune',
  originalTitle: 'Dune Part One',
  director: 'Denis Villeneuve',
  releaseYear: 2021,
  boxOffice: {
    budget: 105555,
    grosses: 129944,
    grossWorldWide: 12314142,
  }
}
