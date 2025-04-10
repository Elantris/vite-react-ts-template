import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Layout
