"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import NavLink from "./NavLink"

export default function NavBar() {
  const { data: session } = useSession()

  return (

    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center gap-4">

      <NavLink href="/">Home</NavLink>
      <NavLink href="/blogs">blogs</NavLink>
      <NavLink href="/users">users</NavLink>
      
      <div className="ml-auto flex items-center gap-4"></div>
      {session ? (
        <>
          <NavLink href="/blogs/new">create new</NavLink>
          <em className="text-gray-300">{session.user?.name} logged in</em>{" "}
          <button onClick={() => signOut()}
            className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded text-sm"
          >logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login" className="hover:text-gray-300">login</Link>
          {" | "}
          <Link href="/register" className="hover:text-gray-300">register</Link>
        </>
      )}
    </nav>
  )
}