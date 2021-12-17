import readlineSync from 'readline-sync';
import * as games from '../../src/index.js';

const defineNOD = (number1, number2) => {
  let value1 = number1;
  let value2 = number2;
  while (value1 !== 0 && value2 !== 0) {
    if (value1 > value2) {
      value1 %= value2;
    } else {
      value2 %= value1;
    }
  }
  return value1 + value2;
};

const playBrainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let counter = 1; counter < 4; counter += 1) {
    const number1 = games.randomNumber();
    const number2 = games.randomNumber();
    const task = `${number1} ${number2}`;
    console.log(`${games.question}${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === `${defineNOD(number1, number2)}`) {
      console.log(games.correct);
    } else {
      console.log(`'${userAnswer}'${games.wrongAnswer} '${defineNOD(number1, number2)}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playBrainGcd;
