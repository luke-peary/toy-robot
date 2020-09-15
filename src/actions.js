const chalk = require("chalk");
const robot = require("./robot");
const { isPermitted, canPlace, placeArgs } = require("./utils");

const turn = (direction) => {
  const turnLeft = direction === "left";

  switch (robot.facing) {
    case "NORTH":
      return turnLeft ? "WEST" : "EAST";
    case "EAST":
      return turnLeft ? "NORTH" : "SOUTH";
    case "SOUTH":
      return turnLeft ? "EAST" : "WEST";
    case "WEST":
      return turnLeft ? "SOUTH" : "NORTH";
  }
};

const left = () => {
  robot.facing = turn("left");
};

const right = () => {
  robot.facing = turn("right");
};

const place = (args) => {
  const [x, y, f] = placeArgs(args);

  if (!canPlace(x, y)) return;

  console.log("still going");

  robot.posX = x;
  robot.posY = y;
  robot.facing = f.toUpperCase();
  robot.isPlaced = true;
};

const move = () => {
  switch (robot.facing) {
    case "NORTH":
      isPermitted(robot.posY + 1) && ++robot.posY;
      break;
    case "EAST":
      isPermitted(robot.posX + 1) && ++robot.posX;
      break;
    case "SOUTH":
      isPermitted(robot.posY - 1) && --robot.posY;
      break;
    case "WEST":
      isPermitted(robot.posX - 1) && --robot.posX;
      break;
  }
};

const report = () => {
  console.log(
    chalk.green(
      `The robot is located at: ${robot.posX},${robot.posY},${robot.facing}`
    )
  );
};

module.exports = {
  left,
  right,
  place,
  move,
  report,
};
