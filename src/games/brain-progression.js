import * as games from '../index.js';

const generationTask = () => {
  let startString = games.randomNumber(1, 100);
  const lengthString = games.randomNumber(10, 15);
  const stepProgression = games.randomNumber(1, 5);
  const covertNumber = games.randomNumber(0, 10);
  let task = '';
  for (let i = 0; i <= lengthString; i += 1) {
    if (i === covertNumber) {
      task += '.. ';
      startString += stepProgression;
    }
    task += `${startString} `;
    startString += stepProgression;
  }
  return task;
};
