const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allLocations = species.reduce((acc, cur) => {
  if (!acc.includes(cur.location)) {
    return [...acc, cur.location];
  }
  return acc;
}, []);

const getLocation = () => {
  const objectLocation = {};
  allLocations.forEach((location) => objectLocation[location] = species.filter((specie) => 
      specie.location === location).reduce((acc, cur) => [...acc, cur.name], []));
  return objectLocation;
};
console.log(getLocation());

function getAnimalMap(options) {
  if (typeof options === 'undefined' || Object.keys(options).length < 1) {
    return  // console.log(objectLocation);
  }
}
getAnimalMap();

module.exports = getAnimalMap;
