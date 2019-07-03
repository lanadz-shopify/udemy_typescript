const apples: number = 5;
let speed: string = 'fast';
let nothingMuch: null = null;
let colors: string[] = ['red', 'green'];

let point: { x: number; y: number } = {
  x: 20,
  y: 20
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordintes: { x: number; y: number } = JSON.parse(json);

//Functions

const add = (a: number, b: number) => {
  return a + b;
};

function multiply(a: number, b: number): number {
  return a * b;
}
const throwError = (message: string): void => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };
// const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
//   console.log(date);
//   console.log(weather);
// };

// logWeather(forecast);

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lon: 0
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lon }
}: { coords: { lat: number; lon: number } } = profile;

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

const oldCivic = {
  name: 'civic',
  year: new Date(1999),
  broken: true,
  summary(): string {
    return `Name: ${this.name}, year: ${this.year}, is it broken: ${
      this.broken
    }`;
  }
};

printVehicle(oldCivic);
