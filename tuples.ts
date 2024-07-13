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
