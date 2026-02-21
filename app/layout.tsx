import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Everyday - Sustainable Fashion Marketplace',
  description: 'Sustainable fashion marketplace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
