var CARS = [
  {name: "Alfa Romeo 4C",  bhp: 237,  nationality: "Italian", yearCompanyFounded: "6/24/1910", companyAge: age},
  {name: "BMW 328i",       bhp: 240,  nationality: "German", yearCompanyFounded: "3/7/1916", companyAge: age},
  {name: "Merc C-Class",   bhp: 201,  nationality: "German", yearCompanyFounded: "10/4/1926", companyAge: age},
  {name: "Audi A3",        bhp: 292,  nationality: "German", yearCompanyFounded: "6/29/1932", companyAge: age},
  {name: "Jaguar XF",      bhp: 240,  nationality: "British", yearCompanyFounded: "11/11/1922", "companyAge": age},
  {name: "Mitsubishi i",   bhp: 66,   nationality: "Japanese", yearCompanyFounded: "2/3/1870", companyAge: age},
  {name: "Bugatti Veyron", bhp: 1200, nationality: "German", yearCompanyFounded: "7/28/1909", companyAge: age}
];

var age = 0;

for (var i = 0; i < CARS.length; i++) {
  age = (new Date().getTime()) - (new Date(CARS[i].yearCompanyFounded).getTime());
  age = Math.floor(age/1000/3600/24/365);
  CARS[i].companyAge = age;
}

if (typeof module != "undefined" && module.exports)
  module.exports = CARS;
