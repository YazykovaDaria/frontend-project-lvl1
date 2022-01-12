import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const endProgression = 12;

const getProgression = () => {
  const startString = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(1, 5);
  const progression = [];
  for (let i = 0; i <= endProgression; i += 1) {
    const result = startString + (stepProgression * i);
    progression.push(result);
  }
  return progression;
};

const generateRound = () => {
  const covertNumber = getRandomNumber(0, 12);
  const progression = getProgression();
  const correctAnswer = progression[covertNumber];
  progression[covertNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const brainProgression = () => {
  const gameRounds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    gameRounds.push(generateRound());
  }
  playGames(rulesOfTheGame, gameRounds);
};

export default brainProgression;
