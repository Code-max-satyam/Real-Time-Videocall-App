import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import Videopage from "./components/Videopage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/room/:id",
    element: <Videopage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />, // ✅ Redirect unknown paths to homepage
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
