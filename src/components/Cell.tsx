import clsx from "clsx"

function handleLeftClick() {}

export default function Cell({ cell, line }: CellProps) {
  return (
    <div
      className={clsx(
        `w-16 h-16 border-1 border-zinc-500 text-4xl flex justify-center items-center`,
        line && `border-r-2 border-r-zinc-50`,
        cell.type === `default` && `font-bold`,
        cell.type === `unknown` && `cursor-pointer`
      )}
      onClick={() => handleLeftClick()}
    >
      {cell.type !== `unknown` ? cell.value : ``}
    </div>
  )
}
