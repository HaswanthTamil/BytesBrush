// /app/layout.tsx

import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "BytesBrush",
  description: "Meet the team",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        {children}
      </body>
    </html>
  )
}
