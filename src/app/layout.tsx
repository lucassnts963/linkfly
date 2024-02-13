import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jaqueline Machado',
  description: 'Afiliada Ybera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`font-sans bg-purple-50 text-zinc-800 ${inter.className}`}>{children}</body>
    </html>
  )
}
