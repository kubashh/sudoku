import { Signal } from "./Signal"

export const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const LEVELS = {
  easy: { numbers: 37 },
  medium: { numbers: 34 },
  hard: { numbers: 31 },
  expert: { numbers: 28 },
  master: { numbers: 25 },
  extreme: { numbers: 22 },
}

export const board = new Signal<TBoard>([])
export const level = new Signal<TLevel>(`easy`)
