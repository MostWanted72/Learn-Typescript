
// let any thing
let anyThing: any = 'The movie was great';
anyThing = 2;

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovie: string;

for(let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}