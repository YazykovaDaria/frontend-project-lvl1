import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0);

const generateRound = () => {
  const task = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const brainEven = () => {
  const gameRounds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    gameRounds.push(generateRound());
  }
  playGames(rulesOfTheGame, gameRounds);
};

export default brainEven;
