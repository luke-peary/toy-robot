const robot = require("./robot");
const { left, right, place, move } = require("./actions");

beforeEach(() => {
  robot.reset();
});

describe("PLACE", () => {
  it("should place robot in expected position", () => {
    place("3,4,SOUTH");

    expect(robot).toEqual(
      expect.objectContaining({
        posX: 3,
        posY: 4,
        facing: "SOUTH",
      })
    );
  });

  it("should not allow placement beyond the table", () => {
    place("3,6,SOUTH");

    expect(robot.isPlaced).toBe(false);
  });
});

describe("LEFT", () => {
  it("should turn the robot to the left", () => {
    place("0,0,NORTH");
    left();

    expect(robot.facing).toBe("WEST");
  });

  it("should not turn if the robot is not placed", () => {
    left();

    expect(robot.facing).toBe(undefined);
  });
});

describe("RIGHT", () => {
  it("should turn the robot to the right", () => {
    place("0,0,NORTH");
    right();

    expect(robot.facing).toBe("EAST");
  });

  it("should not turn if the robot is not placed", () => {
    right();

    expect(robot.facing).toBe(undefined);
  });
});

describe("MOVE", () => {
  it("should move the robot forward 1 space", () => {
    place("0,0,NORTH");
    move();

    expect(robot).toEqual(
      expect.objectContaining({
        posX: 0,
        posY: 1,
      })
    );
  });

  it("should not move if the robot is not placed", () => {
    move();

    expect(robot).toEqual(
      expect.objectContaining({
        posX: 0,
        posY: 0,
      })
    );
  });

  it("should not move if either position is beyond the 5 x 5 table", () => {
    place("0,5,NORTH");
    move();

    expect(robot).toEqual(
      expect.objectContaining({
        posX: 0,
        posY: 5,
        facing: "NORTH",
      })
    );
  });
});
