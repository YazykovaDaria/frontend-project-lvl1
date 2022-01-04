/* eslint-disable default-case */
import getRandomNumber from '../utilite.js';

export const rulesOfTheGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

const calculate = (number1, number2, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
  }
  return answer;
};

export const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correcrAnswer = calculate(number1, number2, operator);
  return [question, correcrAnswer];
};
