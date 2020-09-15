const fs = require("fs");
const chalk = require("chalk");
const { left, right, place, move, report } = require("./actions");
const commands = fs.readFileSync("input.txt").toString().split("\n");

const instruct = (command, arguments) => {
  switch (command) {
    case "PLACE":
      place(arguments);
      break;
    case "MOVE":
      move();
      break;
    case "LEFT":
      left();
      break;
    case "RIGHT":
      right();
      break;
    case "REPORT":
      report();
      break;
    default:
      console.log(
        chalk.yellow(
          `One of your commands ("${command}") is invalid and has been ignored`
        )
      );
  }
};

const init = () => {
  if (!commands[0].startsWith("PLACE")) {
    console.log(chalk.yellow("You need to place the robot on the table first"));
    return;
  }

  for (i in commands) {
    const [command, arguments] = commands[i].split(" ");

    instruct(command, arguments);
  }
};

init();
