import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

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
  const gameRaunds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(question);
    const round = [question, correctAnswer];
    gameRaunds.push(round);
  }
  return gameRaunds;
};

const questionAnswer = generateRound();

const brainPrime = () => playGames(rulesOfTheGame, questionAnswer);

export default brainPrime;
