const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allLocations = species.reduce((acc, cur) => {
  if (!acc[cur.location]) {
    return [...acc, cur.location];
  }
  return acc;
}, []);
console.log(allLocations());

function getAnimalMap(options) {
  // TO-DO
  // Terminar implementação!
}
getAnimalMap();

module.exports = getAnimalMap;
