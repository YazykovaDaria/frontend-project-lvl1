import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const gameRaunds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    const task = getRandomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(task);
    const round = [task, correctAnswer];
    gameRaunds.push(round);
  }
  return gameRaunds;
};

const gameRaunds = generateRound();

const brainEven = () => playGames(rulesOfTheGame, gameRaunds);

export default brainEven;
