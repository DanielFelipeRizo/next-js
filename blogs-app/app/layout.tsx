import Link from "next/link"
import AuthSessionProvider from "./components/SessionProvider"
import NavBar from "./components/NavBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        {/* <nav>


          <Link href="/">home</Link>
          {" | "}
          <Link href="/blogs">blogs</Link>
          {" | "}
          <Link href="/blogs/new">create new</Link>
          {" | "}
          <Link href="/users">users</Link>
        </nav> */}

        <AuthSessionProvider>
          <NavBar />
          {children}
        </AuthSessionProvider>

      </body>
    </html>
  )
}