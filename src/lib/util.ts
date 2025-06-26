import { level, LEVELS } from "./consts"

function genArray9x9(v: any, copy?: boolean) {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => (copy ? JSON.parse(JSON.stringify(v)) : v))
  )
}

function randIndex9() {
  return Math.floor(Math.random() * 9)
}

function createEmptyBoard() {
  return genArray9x9(
    {
      value: 1,
      type: `unknown`,
      notes: [],
    },
    true
  )
}

function genNumbers() {
  const numbers: TNumber[][] = genArray9x9(1)

  // for (let x = 0; x < 9; x++) {
  //   const row: TNumber[] = []
  //   for (let y = 0; y < 9; y++) row.push(1)
  //   numbers.push(row)
  // }

  return numbers
}

function genRandPlaces() {
  const randPlaces: boolean[][] = genArray9x9(false)

  for (let placesCount = 0; placesCount < LEVELS[level.value].numbers; ) {
    const x = randIndex9()
    const y = randIndex9()

    if (!randPlaces[x][y]) {
      randPlaces[x][y] = true
      placesCount++
    }
  }

  return randPlaces
}

export function createBoard() {
  const newBoard = createEmptyBoard()

  const numbers = genNumbers()
  const randPlaces = genRandPlaces()

  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++) {
      newBoard[x][y].value = numbers[x][y]
      if (randPlaces[x][y]) newBoard[x][y].type = `default`
    }

  return newBoard
}
