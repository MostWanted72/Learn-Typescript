const add = (a: number, b: number): number => {
  return a + b;
};

function subtrac(a: number, b: number): number {
  return a - b;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};
