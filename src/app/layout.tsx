// /app/layout.tsx

import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "BytesBrush",
  description: "Meet the team",
  icons: {
    icon: "/BB_Logo.png",
  },
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
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
