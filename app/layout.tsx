import type React from "react"
import type { Metadata, Viewport } from "next"
import { Sora, Plus_Jakarta_Sans } from "next/font/google"

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
})

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
    <html lang="en" className={`dark bg-background ${sora.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
