import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Books app',
  description: 'Aplicacion para buscar y puntuar libros'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
