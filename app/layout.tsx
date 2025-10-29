import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Lab & Lather - Modern Soaps & Candles",
  description:
    "Science-first, IFRA-compliant soaps and candles. Phthalate-free, sulfate-free. Design your modern ritual.",
  generator: "v0.app",
  metadataBase: new URL("https://labandlather.com"),
  keywords: [
    "artisan soaps",
    "luxury candles",
    "IFRA compliant",
    "phthalate-free",
    "sulfate-free",
    "modern skincare",
    "subscription box",
    "natural ingredients",
  ],
  authors: [{ name: "Lab & Lather" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://labandlather.com",
    siteName: "Lab & Lather",
    title: "Lab & Lather - Modern Soaps & Candles",
    description:
      "Science-first, IFRA-compliant soaps and candles. Phthalate-free, sulfate-free. Design your modern ritual.",
    images: [
      {
        url: "/lab-lather-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lab & Lather - Modern Soaps & Candles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@labandlather",
    creator: "@labandlather",
    title: "Lab & Lather - Modern Soaps & Candles",
    description:
      "Science-first, IFRA-compliant soaps and candles. Phthalate-free, sulfate-free. Design your modern ritual.",
    images: ["/lab-lather-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lab & Lather",
    description: "Science-first, IFRA-compliant soaps and candles",
    url: "https://labandlather.com",
    logo: "https://labandlather.com/lab-lather-logo.jpg",
    sameAs: [
      "https://instagram.com/labandlather",
      "https://x.com/labandlather",
      "https://facebook.com/labandlather",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@labandlather.com",
      contactType: "Customer Service",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
    },
  }

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceSans3.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
