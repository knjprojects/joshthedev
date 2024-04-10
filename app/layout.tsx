import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import Providers from './provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:'JoshTheDev',
  description: 'This is my portfolio',
}
//declaring localfont, using .otf file in assets, no tailwind.config options needed
import localFont from 'next/font/local'
const rustic = localFont({
  src: [
    {
      path: '../public/assets/fonts/Rustic.otf',
      weight: '200'
    },
    
  ],
  variable: '--font-rustic'
})
const bariol = localFont({
  src: [
    {
      path: '../public/assets/fonts/bariol.otf',
      weight: '400'
    },
    
  ],
  variable: '--font-bariol'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rustic.variable} ${bariol.variable}`}>
        <Providers><Navbar />
        {children}
        <Navigation /></Providers>
        
        </body>
    </html>
  )
}
