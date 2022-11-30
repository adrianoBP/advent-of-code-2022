// Example!
export const partOne = (rows) => {
  return rows.map((row) =>
    parseInt(row, 10),
  ).reduce((acc, curr) => acc + curr, 0);
};

// Example!
export const partTwo = (rows) => {
  return rows.map((row) =>
    parseInt(row, 10),
  ).reduce((acc, curr) => acc * curr, 1);
};
