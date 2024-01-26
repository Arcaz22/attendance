const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';

const getRandomNumber = (length) => {
  if (length < 1) throw new Error('Invalid number length');
  const min = 10 ** (length - 1);
  const max = 10 ** length;
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomString = (length) => {
  if (length < 4) throw new Error('Minimum length is 4 character');
  const randomUppercase = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  const randomNumber = numberChars[Math.floor(Math.random() * numberChars.length)];
  const remainingLength = length - 3;
  const allChars = uppercaseChars + lowercaseChars + numberChars;
  let randomString = randomUppercase + randomNumber;

  for (let i = 0; i < remainingLength; i++) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    randomString += randomChar;
  }

  return randomString;
};

module.exports = {
  getRandomNumber,
  getRandomString,
};
