import Home from "./page/Home"
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>}></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
