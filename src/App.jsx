import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetails /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}

