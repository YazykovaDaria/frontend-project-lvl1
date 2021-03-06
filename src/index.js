// eslint-disable-next-line max-len
import readlineSync from 'readline-sync';

export const rounds = 3;

export const playGames = (rulesOfTheGame, questionsAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfTheGame);
  for (let counter = 0; counter < rounds; counter += 1) {
    const [question, answer] = questionsAnswers[counter];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === `${answer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
