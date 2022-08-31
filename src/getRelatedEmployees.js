const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const managered = employees.filter((employee1) => employee1.managers !== []);
  const managers = managered.reduce((acc, employee2) =>
    acc.concat(employee2.managers.filter((m) => acc.indexOf(m) < 0)), []);
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const relatedEmployeeObj = employees.filter((employee) =>
      employee.managers.includes(managerId));
    const relatedEmployee = relatedEmployeeObj.reduce((acc, employeeObj) =>
      acc.concat(`${employeeObj.firstName} ${employeeObj.lastName}`), []);
    return relatedEmployee;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
