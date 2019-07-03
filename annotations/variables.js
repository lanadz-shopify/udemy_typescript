var apples = 5;
var speed = 'fast';
var nothingMuch = null;
var colors = ['red', 'green'];
var point = {
    x: 20,
    y: 20
};
var logNumber = function (i) {
    console.log(i);
};
var json = '{"x": 10, "y": 20}';
var coordintes = JSON.parse(json);
//Functions
var add = function (a, b) {
    return a + b;
};
function multiply(a, b) {
    return a * b;
}
var throwError = function (message) {
    throw new Error(message);
};
var forecast = {
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
var profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lon: 0
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lon = _a.lon;
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
var oldCivic = {
    name: 'civic',
    year: new Date(1999),
    broken: true,
    summary: function () {
        return "Name: " + this.name + ", year: " + this.year + ", is it broken: " + this.broken;
    }
};
printVehicle(oldCivic);
///// Classes
var VehicleClass = /** @class */ (function () {
    function VehicleClass(speed) {
        this.speed = speed;
    }
    VehicleClass.prototype.move = function () {
        console.log('gogogogo');
    };
    VehicleClass.prototype.stop = function () {
        console.log('stopped');
    };
    VehicleClass.printType = function () {
        console.log(VehicleClass.type);
    };
    VehicleClass.type = 'vechicle';
    return VehicleClass;
}());
var vec = new VehicleClass(60);
vec.move();
vec.speed;
console.log(VehicleClass.type);
