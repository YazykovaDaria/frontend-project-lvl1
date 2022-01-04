import getRandomNumber from '../utilite.js';
import playGames from '../index.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (number) => {
  const stopSearch = Math.sqrt(number);
  for (let i = 2; i <= stopSearch; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const task = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(task);
  return [task, correctAnswer];
};

const brainPrime = () => playGames(rulesOfTheGame, generateRound);

export default brainPrime;
