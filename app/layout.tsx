import type { Metadata } from 'next'
import { Inter, Lato, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({subsets:["latin"],weight:["100","300","400","700","900"]})
const openSans = Open_Sans({subsets:["latin"],weight:["300","400","500","600","700","800"]})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
