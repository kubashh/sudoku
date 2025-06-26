import clsx from "clsx"
import Cell from "./Cell"
import { board } from "@/lib/consts"

export default function Board() {
  board.bind()
  console.log(board.value)
  return (
    <div className="border-1">
      {board.value.map((row, rowIndex) => (
        <div className={clsx(`flex`, [2, 5].includes(rowIndex) && `border-b-1`)} key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell cell={cell} line={[2, 5].includes(colIndex)} key={colIndex} />
          ))}
        </div>
      ))}
    </div>
  )
}
