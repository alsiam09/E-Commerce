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
import Rootlayout from "./page/Rootlayout";
import Prodect from "./page/Prodect";
import ProdectDetil from "./page/ProdectDetil";
import Checkout from "./page/Checkout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Crat/>}></Route>
    <Route path="/prodect" element={<Prodect/>}></Route>
    <Route path="/prodect/:id" element={<ProdectDetil/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
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
