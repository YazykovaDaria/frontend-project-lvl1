import * as games from '../index.js';

const generationTask = () => {
  let startString = games.randomNumber(1, 100);
  const lengthString = games.randomNumber(10, 15);
  const stepProgression = games.randomNumber(1, 5);
  const covertNumber = games.randomNumber(0, 10);
  let task = '';
  for (let i = 0; i <= lengthString; i += 1) {
    if (i === covertNumber) {
      task += '.. ';
      startString += stepProgression;
    }
    task += `${startString} `;
    startString += stepProgression;
  }
  return task;
};

const correctAnswerBrainProgression = (task) => {
  const taskProgression = task;
  const separator = ' ';
  const searchAnswer = taskProgression.split(separator);
  let correctAnswer;
  for (let i = 0; i < searchAnswer.length; i += 1) {
    if (searchAnswer[i] === '..') {
      const search = searchAnswer[i + 2] - searchAnswer[i + 1];
      correctAnswer = searchAnswer[i + 1] - search;
    }
  }
  return correctAnswer;
};

const playBrainProgression = () => {
  const rulesOfTheGame = 'What number is missing in the progression?';
  // генерируется только один вариант прогрессии, подумать как исправить
  const game = games.playGames(rulesOfTheGame, generationTask(), correctAnswerBrainProgression);
  return game;
};

export default playBrainProgression;
