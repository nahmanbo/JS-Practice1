let grid = [
    ['X', 'o', 'x', 'X', 'O'],
    ['x', 'X', 'O', 'x', 'X'],
    ['X', 'X', 'x', 'O', 'x'],
    ['x', 'o', 'O', 'X', 'x'],
    ['O', 'X', 'x', 'x', 'X']
  ];

  let count = 0;

for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    if (grid[row][col] === 'X') {
      count++;
      console.log(`'X' found at [${row}][${col}]`);
    }
  }
}

console.log(`Total 'X' found: ${count}`);