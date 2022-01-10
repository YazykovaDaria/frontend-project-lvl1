/* eslint-disable default-case */
import getRandomNumber from '../utilite.js';
import { playGames, rounds } from '../index.js';

const rulesOfTheGame = 'What is the result of the expression?';

const operators = ['-', '+', '*'];

const getRandomOperator = () => {
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;
  }
  return null;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator);
  const round = [question, correctAnswer];
  // gameRounds.push(round);
  return round;
};

const brainCalc = () => {
  const gameRounds = [];
  for (let counter = 1; counter <= rounds; counter += 1) {
    const round = generateRound();
    gameRounds.push(round);
  }
  playGames(rulesOfTheGame, gameRounds);
};
export default brainCalc;
