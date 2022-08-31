const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeObj = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return employeeObj || {};
}

module.exports = getEmployeeByName;
