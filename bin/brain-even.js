#!/usr/bin/env node

import readlineSync from 'readline-sync';
import * as games from '../src/cli.js';

const checkNumberEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // не знаю как сделать эту часть экспортируемой чтобы сохранялось имя пользователя
  for (let counter = 1; counter < 4; counter += 1) {
    const number = games.randomNumber();
    console.log(`Question:${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === checkNumberEven(number)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkNumberEven(number)}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

playBrainEven();
