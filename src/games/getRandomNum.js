const getRandomNumber = (maxNumber, minNumber) => {
  const result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return result;
};

export default getRandomNumber;
