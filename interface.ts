const oldCevic = {
  name: 'cevic',
  broken: true,
  year: 2000,
  summary() {
    return `Car name is ${this.name} and it's made in year ${
      this.year
    }, the working condition of the car is ${this.boken ? 'broker' : 'works'}`;
  },
};

interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCevic);
