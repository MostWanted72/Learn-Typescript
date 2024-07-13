const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInformation() {
    return `my name is ${this.name} and my age is ${this.ages}`;
  }
}

const red: Color = new Color('pagidi', 43);
