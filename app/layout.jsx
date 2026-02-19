import './globals.css'

export const metadata = {
  title: 'Himanshu - Full Stack Developer',
  description: 'Portfolio of Himanshu Choudhary, Full Stack Developer & AI Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-[Poppins]">
        {children}
      </body>
    </html>
  )
}
