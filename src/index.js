// eslint-disable-next-line max-len
import readlineSync from 'readline-sync';

export const randomNumber = (maxNumber, minNumber) => {
  const result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return result;
};

export const question = 'Question: ';
export const wrongAnswer = ' is wrong answer ;(. Correct answer was ';
export const correct = 'Correct!';

export const playGames = (rules, task, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  const rulesGames = rules;
  console.log(rulesGames);
  // не знаю как сделать эту часть экспортируемой чтобы сохранялось имя пользователя
  for (let counter = 1; counter < 4; counter += 1) {
    console.log(`Question:${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const checkAnswer = correctAnswer(task);
    if (userAnswer === `${checkAnswer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkAnswer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
