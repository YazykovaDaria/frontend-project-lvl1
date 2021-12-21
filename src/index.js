// eslint-disable-next-line max-len
import readlineSync from 'readline-sync';

const playGames = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  const rulesGames = game.rulesOfTheGame;
  console.log(rulesGames);
  for (let counter = 1; counter < 4; counter += 1) {
    const task = game.generationTask();
    console.log(`Question:${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const checkAnswer = game.correctAnswer(task);
    if (userAnswer === `${checkAnswer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkAnswer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGames;
