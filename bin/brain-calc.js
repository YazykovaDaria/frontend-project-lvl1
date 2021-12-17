#!/usr/bin/env node
/* eslint-disable default-case */
import readlineSync from 'readline-sync';
import * as games from '../src/index.js';

const makeOperator = () => {
  const operators = ['-', '+', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

const playBrainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let counter = 1; counter < 4; counter += 1) {
    const number1 = games.randomNumber();
    const number2 = games.randomNumber();
    const operator = makeOperator();
    const task = `${number1} ${operator} ${number2}`;
    console.log(`${games.question}${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
    // почему проверка не срабатывает?
    } if (userAnswer !== `${correctAnswer}`) {
      console.log(`'${userAnswer}'${games.wrongAnswer}'${correctAnswer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log(games.correct);
  }
  return console.log(`Congratulations, ${userName}!`);
};

playBrainCalc();
