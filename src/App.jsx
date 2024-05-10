import Home from "./page/Home"
import './App.css'
import "slick-carousel/slick/slick.css";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Crat from "./page/Crat";
import 'react-loading-skeleton/dist/skeleton.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Crat/>}></Route>
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
