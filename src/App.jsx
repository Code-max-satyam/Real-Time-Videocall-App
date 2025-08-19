
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Homepage from "./components/Homepage"
import Videopage from "./components/Videopage";
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
