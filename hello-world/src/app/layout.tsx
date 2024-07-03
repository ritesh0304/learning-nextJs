export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <header style={{
          backgroundColor:"red",
          padding:"1rem"
        }} >
          Header
        </header>

        {children}
        
        <footer style={{
          backgroundColor:"pink",
          padding:"2rem"
        }} >
          Footer
        </footer>

        </body>
    </html>
  )
}