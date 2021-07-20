'use strict';

const names = [
  'A-Jay',
  'Manuel',
  'Manuel',
  'Eddie',
  'A-Jay',
  'Su',
  'Reean',
  'Manuel',
  'A-Jay',
  'Zacharie',
  'Zacharie',
  'Tyra',
  'Rishi',
  'Arun',
  'Kenton',
];

function eliminarDuplicados(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(eliminarDuplicados(names));