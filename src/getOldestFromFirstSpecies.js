const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (id) =>
  employees.find((employee) => employee.id === id);

const getFirstSpecieId = (employeeObj) =>
  employeeObj.responsibleFor.find((specie) => specie[0]);

const getResidents = (firstSpecieId) =>
  species.find((specie) => specie.id === firstSpecieId).residents;

const getOldest = (residents) =>
  residents.sort((a, b) => b.age - a.age)[0];

const getArray = (oldest) =>
  Object.values(oldest);

function getOldestFromFirstSpecies(id) {
  const employeeObj = getEmployee(id);
  const firstSpecieId = getFirstSpecieId(employeeObj);
  const residents = getResidents(firstSpecieId);
  const oldest = getOldest(residents);
  return getArray(oldest);
}

module.exports = getOldestFromFirstSpecies;
