const profile = {
  age: 20,
  name: 'alex',
  cords: {
    lat: 0,
    lag: 15,
  },
  setAge(age: string): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  cords: { lat, lag },
}: { cords: { lat: number; lag: number } } = profile;
