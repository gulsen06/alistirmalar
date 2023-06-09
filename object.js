const person = {
  name: "Ali",
  age: 30,
  ctiy: "Ankara",
  sayHallo: function () {
    console.log(`Merhaba benim adim` + person.name);
  },
  hobies: ["yüzme", "kosu", "müzik "],
  isMarried: false,
};
console.log(`${person.name}:${person.age}\'da`);

const car = {
  brand: "toyota",
  model: "corolla",
  year: "2022",
  honk: function () {
    console.log("beep beep");
  },
  isElectric: true,
};
console.log(`${car.brand} arabasinin modeli ${car.model}\' dir`);
