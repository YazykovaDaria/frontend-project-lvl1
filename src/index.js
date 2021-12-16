export const randomNumber = () => {
  const maxNumber = 100;
  const minNumber = 1;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

export const question = 'Question: ';
export const wrongAnswer = ' is wrong answer ;(. Correct answer was ';
export const correct = 'Correct!';
