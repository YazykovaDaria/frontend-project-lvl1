import * as utilite from './utilite.js';

export const rulesOftheGame = 'ind the greatest common divisor of given numbers.';

export const correctAnswer = (string) => {
  const reseveNumber = utilite.getArrayWithString(string);
  let value1 = reseveNumber[0];
  let value2 = reseveNumber[1];
  while (value1 !== 0 && value2 !== 0) {
    if (value1 > value2) {
      value1 %= value2;
    } else {
      value2 %= value1;
    }
  }
  return value1 + value2;
};

export const generationTask = () => {
  const number1 = utilite.getRandomNumber(1, 100);
  const number2 = utilite.getRandomNumber(1, 100);
  return `${number1} ${number2}`;
};
