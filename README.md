# Toy Robot

## Description

This application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

## Commands

PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT

**PLACE** will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0)
can be considered to be the SOUTH WEST most corner. It is required that the first command to the robot is a PLACE
command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The
application should discard all commands in the sequence until a valid PLACE command has been executed.

**MOVE** will move the toy robot one unit forward in the direction it is currently facing.

**LEFT** and **RIGHT** will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

**REPORT** will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

## To run

1. Edit the input.txt file, starting with the PLACE command, followed by a list of commands, succeeded by the REPORT command.
2. Open a terminal and run "yarn robot".
3. The final position and direction of the robot will be printed to the console.

## To test

Run "yarn test" from the root.

## Design decisions

I've chosen to use Vanilla JS in this challenge as there was no graphical interface required, so although you may like to see my proficiency in a framework such as React, I thought adding a framework in this instance would have been excessive.

## Possible next steps:

- Implement a CLI or UI interface rather than using a file
- Add stronger validation and error handling for the users input
- Add typescript for type safety
