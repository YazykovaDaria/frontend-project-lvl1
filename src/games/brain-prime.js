import getRandomNumber from '../../utilite.js';

export const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generationTask = () => {
  const task = getRandomNumber(1, 100);
  return task;
};

export const correctAnswer = (task) => {
  const searchAnsver = Number(task);
  const stopSearch = Math.sqrt(searchAnsver);
  for (let i = 2; i <= stopSearch; i += 1) {
    if (searchAnsver % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
