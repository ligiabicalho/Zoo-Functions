const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const availability = (scheduleTarget) =>
  species.find((specie) => scheduleTarget === specie.name).availability;

const scheduleDay = (scheduleTarget) => {
  const day = hours[scheduleTarget];
  if (scheduleTarget === 'Monday') {
    return 'Not open on Mondays';
  }
  return `Open from ${day.open}am until ${day.close}pm`;
};
console.log(scheduleDay('Sunday'));

function getSchedule(scheduleTarget) {
  availability(scheduleTarget);
  scheduleDay(scheduleTarget);
  return 
}

// console.log((getSchedule('animal'))); // Retorna: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
// console.log((getSchedule('day'))); // Retorne os horários para aquele dia e quais animais estarão disponíveis.
// console.log((getSchedule())); // Retorne todos os horários disponíveis para cada dia da semana
// console.log((getSchedule(!animal, !day))); // Retorne todos os horários disponíveis para cada dia da semana

// {
//   Tuesday: { // Dia da semana
//     officeHour: 'Open from 8am until 6pm', // n
//     exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   Wednesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//   },
//   // [...]
// }

// hours: {
//   Tuesday: { open: 8, close: 6 },
//   Wednesday: { open: 8, close: 6 },
//   Thursday: { open: 10, close: 8 },
//   Friday: { open: 10, close: 8 },
//   Saturday: { open: 8, close: 10 },
//   Sunday: { open: 8, close: 8 },
//   Monday: { open: 0, close: 0 },
// },


module.exports = getSchedule;
