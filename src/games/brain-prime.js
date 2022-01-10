import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (number) => {
  const stopSearch = Math.sqrt(number);
  for (let i = 2; i <= stopSearch; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(question) ? 'yes' : 'no';
  const round = [question, correctAnswer];
  return round;
};

const brainPrime = () => {
  const gameRounds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    gameRounds.push(generateRound());
  }
  playGames(rulesOfTheGame, gameRounds);
};

export default brainPrime;
