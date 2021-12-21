export const getRandomNumber = (maxNumber, minNumber) => {
  const result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return result;
};

export const getArrayWithString = (string) => {
  const separator = ' ';
  const getArray = string.split(separator);
  return getArray;
};
