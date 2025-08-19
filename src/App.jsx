
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Homepage from './com/Homepage'
import Videopage from './com/Videopage'
function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>
  },
  {
    path:"/room/:id",
    element:<Videopage/>
  }
])

  return (
   <div className='App'>
 <RouterProvider router={router}/>
   </div>
  )
}

export default App
