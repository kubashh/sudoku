const numberList=[1,2,3,4,5,6,7,8,9]
const grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0]]

function range(min: number, max: number) {
  const arr = []
  for(let i = min; i < max; i++)
    arr.push(i)
  return arr
}

function randIndex9() {
  return Math.floor(Math.random() * 9)
}

function printGrid() {
  console.log(grid)
}

// A function to check if the grid is full
function checkGrid(){
  for(const x of range(0, 9))
    for (const y of range(0, 9))
      if (grid[x][y] === 0)
        return false

  // We have a complete grid!  
  return true 
}

// A backtracking/recursive function to check all possible combinations of numbers until a solution is found
function solveGrid(grid: any) {
  // Find next empty cell
  for (const i of range(0, 81)) {
    const row = Math.floor(i / 9)
    const col = i % 9
    if(grid[row][col] !== 0) continue

    for (const value in range (1, 10)) {
      // Check that this value has not already be used on this row
      if (value in grid[row]) continue

      // Check that this value has not already be used on this column
      if (value in (grid[0][col],grid[1][col],grid[2][col],grid[3][col],grid[4][col],grid[5][col],grid[6][col],grid[7][col],grid[8][col])) continue

      // Identify which of the 9 squares we are working on
      let square=[]
      if (row < 3)
        if (col < 3)  {square=[grid[i].splice(0, 3) for i in range(0,3)]}
        else if (col < 6){
          square=[grid[i].splice(3,6) for i in range(0,3)]
        }  else {square=[grid[i].splice(6,9) for i in range(0,3)]}
      else if(row < 6)
        if( col < 3) {

          square=[grid[i].splice(0, 3) for i in range(3,6)]
        } else if (col<6){
          square=[grid[i].splice(3,6) for i in range(3,6)]
        }else {
          square=[grid[i].splice(6,9) for i in range(3,6)]
        }  
       else {
        if (col < 3){
          square=[grid[i].splice(0, 3) for i in range(6,9)]}
        else if (col < 6){
          square=[grid[i].splice(3,6) for i in range(6,9)]}
        else{
          square=[grid[i].splice(6,9) for i in range(6,9)]}}

      // Check that this value has not already be used on this 3x3 square
      if (value in (square[0] + square[1] + square[2])) continue

      grid[row][col] = value

      if (checkGrid()) break
      if (solveGrid(grid)) return true
      break
    }
    grid[row][col] = 0
  }
}

// A backtracking/recursive function to check all possible combinations of numbers until a solution is found
function fillGrid() {
  // Find next empty cell
  for i in range(0,81):
    const row= Math.floor(i / 9)
    const col=i%9
    if grid[row][col]==0:
      shuffle(numberList)      
      for value in numberList:
        // Check that this value has not already be used on this row
        if not(value in grid[row]):
          // Check that this value has not already be used on this column
          if not value in (grid[0][col],grid[1][col],grid[2][col],grid[3][col],grid[4][col],grid[5][col],grid[6][col],grid[7][col],grid[8][col]):
            // Identify which of the 9 squares we are working on
            square=[]
            if row<3:
              if col<3:
                square=[grid[i].splice(0, 3) for i in range(0,3)]
              elif col<6:
                square=[grid[i].splice(3,6) for i in range(0,3)]
              else:  
                square=[grid[i].splice(6,9) for i in range(0,3)]
            elif row<6:
              if col<3:
                square=[grid[i].splice(0, 3) for i in range(3,6)]
              elif col<6:
                square=[grid[i].splice(3,6) for i in range(3,6)]
              else:  
                square=[grid[i].splice(6,9) for i in range(3,6)]
            else:
              if col<3:
                square=[grid[i].splice(0,3) for i in range(6,9)]
              elif col<6:
                square=[grid[i].splice(3,6) for i in range(6,9)]
              else:  
                square=[grid[i].splice(6,9) for i in range(6,9)]
            // Check that this value has not already be used on this 3x3 square
            if not value in (square[0] + square[1] + square[2]):
              grid[row][col] = value
              if checkGrid() or fillGrid():
                return True
      break
  grid[row][col] = 0
}

// Generate Solved Grid
fillGrid()
printGrid()

// Start Removing Numbers one by one

// A higher number of attempts will end up removing more numbers from the grid
// Potentially resulting in more difficiult grids to solve!
let attempts = 5
while (attempts > 0){
  // Select a random cell that is not already empty
  let row = randIndex9()
  let col = randIndex9()
  while (grid[row][col] == 0) {
    row = randIndex9()
    col = randIndex9()
  }
  // Remember its cell value in case we need to put it back  
  const backup = grid[row][col]
  grid[row][col] = 0

  // Take a full copy of the grid
  const copyGrid = JSON.parse(JSON.stringify(grid))

  // Count the number of solutions that this grid has (using a backtracking approach implemented in the solveGrid() function)
  solveGrid(copyGrid)   
  // If the number of solution is different from 1 then we need to cancel the change by putting the value we took away back in the grid

  grid[row][col] = backup
  // We could stop here, but we can also have another attempt with a different cell just to try to remove more numbers
  attempts -= 1

  printGrid()
}
