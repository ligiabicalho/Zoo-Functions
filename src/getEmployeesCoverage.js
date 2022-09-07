const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allID = employees.reduce((acc, cur) => [...acc, cur.id], []);
const allFirstName = employees.reduce((acc, cur) => [...acc, cur.firstName], []);
const allLastName = employees.reduce((acc, cur) => [...acc, cur.lastName], []);
console.log(allID, allFirstName, allLastName);

const getEmployee = (employeeData) => {
  if (allID.includes(employeeData.id)) {
    return
  }
  if (allFirstName.includes(employeeData.name)
  || allLastName.includes(employeeData.name)) {
    return
  }
};

// const getEmployeefullName = (employeeData) => false;

// const getSpecies = (employeeData) => false;

// const getlocations = (employeeData) => false;

function getEmployeesCoverage(employeeData) { // parametro: employee name (fist or last) OU employee id .
  getSpecies();
}

// getEmployeesCoverage({name: 'Sharonda'})
module.exports = getEmployeesCoverage;
