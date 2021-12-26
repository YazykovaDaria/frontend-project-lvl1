import getRandomNumber from '../../utilite.js';

export const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

export const generationTask = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  return `${number1} ${number2}`;
};

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

export const correctAnswer = (task) => {
  const reseveNumber = task.split(' ');
  const value1 = Number(reseveNumber[0]);
  const value2 = Number(reseveNumber[1]);
  const result = gcd(value1, value2);
  return result;
};
