import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [question, correctAnswer];
};

const brainGcd = () => {
  const gameRounds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    gameRounds.push(generateRound());
  }
  playGames(rulesOfTheGame, gameRounds);
};

export default brainGcd;
