/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Props
type CellProps = {
  cell: TCell
  line: boolean
}

// Game Types
type TLevel = `easy` | `medium` | `hard` | `expert` | `master` | `extreme`

type TNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type CellDefault = {
  value: TNumber
  type: `default`
}

type CellKnown = {
  value: TNumber
  type: `known`
}

type CellUnknown = {
  value: TNumber
  type: `unknown`
  notes: TNumber[]
}

type CellEmpty = {
  value: 0
  type: `empty`
}

type TCell = CellDefault | CellKnown | CellUnknown | CellEmpty

type TBoard = TCell[][]
