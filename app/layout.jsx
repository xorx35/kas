export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ background:'#f4f4f4', fontFamily:'Arial' }}>
        {children}
      </body>
    </html>
  )
}