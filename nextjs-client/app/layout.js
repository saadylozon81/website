import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'

export const metadata = {
  title: 'ASAL Technologies – Engineering the Future of Digital, AI, and Cloud Solutions',
  description:
    'ASAL Technologies builds enterprise-grade, modern, scalable technology products through end-to-end engineering quality, dedicated teams, and trusted delivery models.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
