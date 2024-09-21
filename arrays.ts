// object optional property

const car: { type: string, mileage?: number} = {
  type: 'Toyota'
}

// enums are group of constansts that do not change there values 

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North
console.log