import getRandomNumber from '../utilite.js';

export const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

export const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const task = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [task, correctAnswer];
};
