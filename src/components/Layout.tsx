import { FC, ReactNode } from 'react'
import { Link } from 'wouter'

const Layout: FC<{
  children?: ReactNode
}> = ({ children }) => {
  return (
    <>
      <nav className="flex gap-4 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
      </nav>

      {children}
    </>
  )
}

export default Layout
