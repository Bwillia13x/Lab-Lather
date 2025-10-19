import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _sourceSans3 = Source_Sans_3({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lab & Lather - Modern Soaps & Candles",
  description:
    "Science-first, IFRA-compliant soaps and candles. Phthalate-free, sulfate-free. Design your modern ritual.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
