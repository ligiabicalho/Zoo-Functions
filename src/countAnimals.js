const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAllSpecies() {
  const countAnimalsObj = species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});
  return countAnimalsObj;
}

function getBySpecie(animal) {
  const specieValue = Object.values(animal).join();
  const specieObj = species.find((specie) => specie.name === specieValue);
  return specieObj.residents.length;
}

function getBySpecieAndSex(animal) {
  const specieObj = species.find((specie) => specie.name === animal.specie);
  const sex = specieObj.residents.filter((resident) => resident.sex === animal.sex);
  return sex.length;
}

function countAnimals(animal) {
  if ((typeof animal === 'object') && Object.keys(animal).includes('specie')) {
    if (!Object.keys(animal).includes('sex')) {
      return getBySpecie(animal);
    }
    return getBySpecieAndSex(animal);
  }
  return getAllSpecies();
}

console.log(countAnimals());

console.log(countAnimals({ specie: 'penguins' }));

console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

module.exports = countAnimals;
