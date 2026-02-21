import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Everyday - Sustainable Fashion Marketplace',
  description: 'Join our community of conscious fashion lovers. Share what you no longer wear and discover unique treasures that deserve a second chance.',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Homepage only - no global header/footer */}
        {children}
      </body>
    </html>
  )
}
