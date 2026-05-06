import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/providers/lenis-provider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Mediwide | Transforming Healthcare Staffing",
  description: "Premium healthcare recruitment and staffing solutions. Fast placements, qualified professionals, nationwide coverage. Build the future of healthcare staffing with Mediwide.",
  keywords: ["healthcare staffing", "medical recruitment", "healthcare recruitment", "nursing jobs", "medical professionals", "temporary staffing", "permanent staffing"],
  authors: [{ name: "Mediwide" }],
  openGraph: {
    title: "Mediwide | Transforming Healthcare Staffing",
    description: "Premium healthcare recruitment and staffing solutions. Fast placements, qualified professionals, nationwide coverage.",
    type: "website",
    locale: "en_US",
    siteName: "Mediwide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediwide | Transforming Healthcare Staffing",
    description: "Premium healthcare recruitment and staffing solutions. Fast placements, qualified professionals, nationwide coverage.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
