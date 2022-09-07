const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const availabilityByAnimals = (scheduleTarget) =>
  species.find((specie) => scheduleTarget === specie.name).availability;

const scheduleByDay = (scheduleTarget) => {
  const day = hours[scheduleTarget];
  if (scheduleTarget === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${day.open}am until ${day.close}pm`;
};

const animalsByDay = (scheduleTarget) => {
  const animals = species.filter((specie) =>
    specie.availability.includes(scheduleTarget));
  const result = animals.reduce((acc, cur) => [...acc, cur.name], []);
  if (result.length < 1) {
    return 'The zoo will be closed!';
  }
  return result;
};

const allAnimals = species.reduce((acc, cur) => [...acc, cur.name], []);
const allDays = Object.keys(hours);

const buildOneDay = (scheduleTarget) => {
  const objectDay = {};
  objectDay[scheduleTarget] = {};
  objectDay[scheduleTarget].officeHour = scheduleByDay(scheduleTarget);
  objectDay[scheduleTarget].exhibition = animalsByDay(scheduleTarget);
  return objectDay;
};

const allInformation = () => {
  const result = {};
  allDays.forEach((day) => {
    const objectDay = {
      officeHour: scheduleByDay(day),
      exhibition: animalsByDay(day),
    };
    result[day] = objectDay;
  });
  return result;
};

function getSchedule(scheduleTarget) {
  if (allAnimals.includes(scheduleTarget)) {
    return availabilityByAnimals(scheduleTarget);
  }
  if (hours[scheduleTarget]) {
    return buildOneDay(scheduleTarget);
  }
  return allInformation();
}

module.exports = getSchedule;
