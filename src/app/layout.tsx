import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sudoku",
  description: "Play sudoku for free, no ads!",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sudoku/favicon.png" />
      </head>
      <body className="w-screen h-screen content-center bg-zinc-950 text-zinc-50">{children}</body>
    </html>
  )
}
