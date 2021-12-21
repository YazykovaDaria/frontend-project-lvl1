import { getRandomNumber } from './utilite.js';

export const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generationTask = () => {
  const task = getRandomNumber(1, 100);
  return task;
};

export const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
