/* eslint-disable default-case */
import * as utilite from './utilite.js';

export const rulesOfTheGame = 'What is the result of the expression?';

const makeOperator = () => {
  const operators = ['-', '+', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

export const generationTask = () => {
  const number1 = utilite.getRandomNumber(1, 100);
  const number2 = utilite.getRandomNumber(1, 100);
  const operator = makeOperator();
  const task = `${number1} ${operator} ${number2}`;
  return task;
};

export const correctAnswer = (task) => {
  const searchAnswer = utilite.getArrayWithString(task);
  const number1 = Number(searchAnswer[0]);
  const operator = searchAnswer[1];
  const number2 = Number(searchAnswer[2]);
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
