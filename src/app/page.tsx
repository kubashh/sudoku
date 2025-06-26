"use client"

import Board from "@/components/Board"
import Header from "@/components/Header"
import { board } from "@/lib/consts"
import { useClient } from "@/lib/hooks"
import { createBoard } from "@/lib/util"

function Game() {
  board.value = createBoard()
  return (
    <main className="py-2 px-6 border-2 border-zinc-400 rounded-2xl w-fit m-auto">
      <Header />
      <Board />
    </main>
  )
}

export default function Home() {
  if (!useClient()) return

  window.oncontextmenu = (e) => e.preventDefault()

  return <Game />
}
