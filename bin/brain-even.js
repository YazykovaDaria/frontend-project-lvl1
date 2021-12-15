#!/usr/bin/env node

import readlineSync from 'readline-sync';

const checkNumberEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxNumber = 100;
  const minNumber = 1;
  for (let counter = 1; counter < 4; counter += 1) {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    console.log(`Question:${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === checkNumberEven(randomNumber)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkNumberEven(randomNumber)}'`);
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

playBrainEven();
