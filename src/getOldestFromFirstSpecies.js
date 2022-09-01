const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (id) =>
  employees.find((employee) => employee.id === id);

// const getSpecie = () =>
  
function getOldestFromFirstSpecies(id) {
  const employeeObj = getEmployee(id);
  const getFirstSpecieId = employeeObj.responsibleFor.find((specie) => specie[0]);
  const getResidents = species.find((specie) => specie.id === getFirstSpecieId).residents;
  const getOldest = getResidents.sort((a, b) => b.age - a.age)[0];
  const getArray = Object.values(getOldest);
  return getArray;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
//'0938aa23-f153-4937-9f88-4858b24d6bce'
module.exports = getOldestFromFirstSpecies;

// const employees = [
//   'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   burlId,
//   olaId,
//   '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//   stephanieId,
//   '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   'c1f50212-35a6-4ecd-8223-f835538526c2',
//   'b0dc644a-5335-489b-8a2c-4e086c7819a2',
// ];

// ['Maxwell', 'male', 15],
// ['Maxwell', 'male', 15],
// ['Margherita', 'female', 10],
// ['Bill', 'male', 6],
// ['Margherita', 'female', 10],
// ['Margherita', 'female', 10],
// ['Shu', 'female', 19],
// ['Maxwell', 'male', 15],
