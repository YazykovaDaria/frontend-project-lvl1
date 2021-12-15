import readlineSync from 'readline-sync';
import * as games from '../src/cli.js';

const operators = ['-', '+', '*'];
const randomOperators = operators[Math.floor(Math.random() * operators.length)];

const playBrainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let counter = 1; counter < 4; counter += 1) {
    const number1 = games.randomNumber();
    const number2 = games.randomNumber();
    const operator = randomOperators;
    const task = `${number1} ${operator} ${number2}`;
    console.log(`Question:${task}`);
  }
  // придумать проверку решения примера
};
