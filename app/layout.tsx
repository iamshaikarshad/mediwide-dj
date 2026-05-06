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
  title: "Mediwide | Digital Solutions for Medical Excellence",
  description: "Premium digital solutions for healthcare professionals. Websites, software, AI systems, and automation for clinics, hospitals, and medical practices. Empowering the future of healthcare technology.",
  keywords: ["healthcare web design", "medical software development", "healthcare AI", "clinic software", "hospital IT solutions", "medical practice software", "healthcare automation", "telehealth solutions"],
  authors: [{ name: "Mediwide" }],
  openGraph: {
    title: "Mediwide | Digital Solutions for Medical Excellence",
    description: "Premium digital solutions for healthcare professionals. Websites, software, AI systems, and automation for clinics, hospitals, and medical practices.",
    type: "website",
    locale: "en_US",
    siteName: "Mediwide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediwide | Digital Solutions for Medical Excellence",
    description: "Premium digital solutions for healthcare professionals. Websites, software, AI systems, and automation for clinics, hospitals, and medical practices.",
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
