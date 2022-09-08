const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allID = employees.reduce((acc, cur) => [...acc, cur.id], []);
const allFirstName = employees.reduce((acc, cur) => [...acc, cur.firstName], []);
const allLastName = employees.reduce((acc, cur) => [...acc, cur.lastName], []);

const getAllEmployees = () => {
  const filteredEmployees = employees.reduce((acc, cur) => [...acc, cur], []);
  return filteredEmployees;
};
// console.log(getAllEmployees());

const getEmployee = (employeeData) => {
  if (allID.includes(employeeData.id)) {
    const employeeById = employees.find((employee) => employee.id === employeeData.id);
    return employeeById;
  }
  if (allFirstName.includes(employeeData.name)) {
    const employeeByFirstName = employees.find((employee) =>
      employee.firstName === employeeData.name);
    return employeeByFirstName;
  }
  if (allLastName.includes(employeeData.name)) {
    const employeeByLastName = employees.find((employee) =>
      employee.lastName === employeeData.name);
    return employeeByLastName;
  }
  throw new Error('Informações inválidas');
};

const getSpecies = (responsibleFor) => {
  const filteredSpecies = species.filter((specie) => responsibleFor.includes(specie.id));
  return filteredSpecies.reduce((acc, cur) => [...acc, cur.name], []);
};

const getLocations = (responsibleFor) => {
  const filteredLocation = species.filter((specie) => responsibleFor.includes(specie.id));
  return filteredLocation.reduce((acc, cur) => [...acc, cur.location], []);
};

function getEmployeesCoverage(employeeData) {
  if (typeof employeeData === 'undefined' || Object.keys(employeeData).length < 1) {
    const objectAllEmployee = getAllEmployees();
    return objectAllEmployee.reduce((acc, cur) => [...acc, {
      id: cur.id,
      fullName: `${cur.firstName} ${cur.lastName}`,
      species: getSpecies(cur.responsibleFor),
      locations: getLocations(cur.responsibleFor),
    },
    ], []);
  }
  const objectEmployee = getEmployee(employeeData);
  const employeesCoverage = {
    id: objectEmployee.id,
    fullName: `${objectEmployee.firstName} ${objectEmployee.lastName}`,
    species: getSpecies(objectEmployee.responsibleFor),
    locations: getLocations(objectEmployee.responsibleFor),
  };
  return employeesCoverage;
}

console.log(getEmployeesCoverage({}));
module.exports = getEmployeesCoverage;
