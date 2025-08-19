
import './App.css'
import { createHashRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/Homepage"
import Videopage from "./components/Videopage"

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/room/:id",
    element: <Videopage />
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App


