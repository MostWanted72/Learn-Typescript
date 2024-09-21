// object optional property

const car: { type: string, mileage?: number} = {
  type: 'Toyota'
}

// enums are group of constansts that do not change there values 

enum StatusCodes {
  Notfound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.Notfound)

// lnterface is similar to type alias but only applys to objects

interface Reactangle {
  height: number,
  width: number,
}

interface ColorReactangle extends Reactangle {
  color: string
}

const reactange: ColorReactangle = {
  height: 12,
  width: 23,
  color: 'black'
}

function printStatusCode (code: number | string) {
  console.log('check this code', code)
}

printStatusCode(203);
printStatusCode('Not found')
// printStatusCode(true)  error

// function add (a: number, b: number, c?: number) {
//   return a + b + (c || 0)
// }

function add (a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0)
}

type FullName = (name: { firstName: string, LastName: string}) => string;
const fullName: FullName = (name) => name.firstName + name.LastName


// Casting

const x3: unknown = 'hellow';
console.log((x3 as string).toUpperCase())