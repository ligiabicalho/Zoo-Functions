const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsByAges = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      entrantsByAges.child += 1;
    } else if (entrant.age >= 50) {
      entrantsByAges.senior += 1;
    } else {
      entrantsByAges.adult += 1;
    }
  });
  return entrantsByAges;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === 0
    || (typeof entrants === 'object' && Object.keys(entrants).length === 0)) {
    return 0;
  }
  const values = Object.values(countEntrants(entrants));
  const priceChild = prices.child * values[0];
  const priceAdult = prices.adult * values[1];
  const priceSenior = prices.senior * values[2];
  const result = priceChild + priceAdult + priceSenior;
  return result;
}

module.exports = { calculateEntry, countEntrants };
