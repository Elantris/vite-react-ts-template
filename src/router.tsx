import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
    ],
  },
])

export default router
