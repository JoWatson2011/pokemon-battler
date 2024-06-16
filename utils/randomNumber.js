function randomNumber(min, max) {
  if ((min >= 0) & (max >= 0)) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return 0;
}
module.exports = randomNumber;
