const chalk = require("chalk");

const isPermitted = (pos) => {
  return pos >= 0 && pos <= 5;
};

const canPlace = (x, y) => {
  if (!isPermitted(x) || !isPermitted(y)) {
    const message = chalk.yellow(
      "You must place the robot on the table by using coordinates between 0 and 5."
    );
    console.log(message);

    return false;
  }

  return true;
};

const placeArgs = (str) => {
  const argsArr = str.split(",");
  const [x, y, f] = argsArr;
  const xNum = parseInt(x);
  const yNum = parseInt(y);

  return [xNum, yNum, f];
};

module.exports = {
  isPermitted,
  canPlace,
  placeArgs,
};
