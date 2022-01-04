import getRandomNumber from '../utilite.js';
import playGames from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const task = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(task);
  return [task, correctAnswer];
};

const brainEven = () => playGames(rulesOfTheGame, generateRound);

export default brainEven;
