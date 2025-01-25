import React from 'react'
import Navbar from '../components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import Contact from '../pages/Contact'
import Product from '../pages/Product'

function RootLayout() {
//  const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/'element={<RootLayout/>}>
//       <Route index element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='product' element={<Product/>}/>
//     </Route>
//   )

  // return the function in <RouterProvider router={router}/> it is latest the create the router element.
//  )
 return (
    <div>
    <Navbar/>
    <div>
      <Outlet/>
    </div>
    </div>
  )
}

export default RootLayout