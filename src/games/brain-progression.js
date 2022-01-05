import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const getCorrectAnswer = (task) => {
  const searchAnswer = task.split(' ');
  let answer;
  for (let i = 0; i < searchAnswer.length; i += 1) {
    if (searchAnswer[i] === '..') {
      const search = searchAnswer[i + 2] - searchAnswer[i + 1];
      answer = searchAnswer[i + 1] - search;
    }
  }
  return answer;
};

const generateRound = () => {
  const gameRaunds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    let startString = getRandomNumber(1, 100);
    const lengthString = getRandomNumber(10, 15);
    const stepProgression = getRandomNumber(1, 5);
    const covertNumber = getRandomNumber(0, 10);
    let question = '';
    for (let i = 0; i <= lengthString; i += 1) {
      if (i === covertNumber) {
        question += '.. ';
        startString += stepProgression;
      }
      question += `${startString} `;
      startString += stepProgression;
    }
    const correctAnswer = getCorrectAnswer(question);
    const round = [question, correctAnswer];
    gameRaunds.push(round);
  }
  return gameRaunds;
};

const questionAnswer = generateRound();

const brainProgression = () => playGames(rulesOfTheGame, questionAnswer);

export default brainProgression;
