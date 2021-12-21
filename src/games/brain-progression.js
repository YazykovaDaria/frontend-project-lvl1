import * as utilite from './utilite.js';

export const rulesOfTheGame = 'What number is missing in the progression';

export const generationTask = () => {
  let startString = utilite.getRandomNumber(1, 100);
  const lengthString = utilite.getRandomNumber(10, 15);
  const stepProgression = utilite.getRandomNumber(1, 5);
  const covertNumber = utilite.getRandomNumber(0, 10);
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

export const correctAnswer = (task) => {
  const searchAnswer = utilite.getArrayWithString(task);
  let answer;
  for (let i = 0; i < searchAnswer.length; i += 1) {
    if (searchAnswer[i] === '..') {
      const search = searchAnswer[i + 2] - searchAnswer[i + 1];
      answer = searchAnswer[i + 1] - search;
    }
  }
  return answer;
};
