const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => (ids.includes(specie.id)));
}

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';

console.log(getSpeciesByIds(lionId, ottersId));

module.exports = getSpeciesByIds;
