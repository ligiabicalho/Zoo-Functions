const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieObj = species.find((specie) => animal === specie.name);
  return specieObj.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('lions', 8));

module.exports = getAnimalsOlderThan;
