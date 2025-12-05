import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IgnisTech Ltd - Innovative Fire Safety Solutions',
  description: 'IgnisTech Ltd specializes in cutting-edge fire safety technology and compliance solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
