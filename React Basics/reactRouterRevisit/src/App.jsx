import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import BaseLayout from './Components/Layout/BaseLayout';
import { StrictMode } from 'react';
import Github from './Components/Github';

function App() {

  const routerCustom = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<BaseLayout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='github' element={<Github />} />
      </Route>
    )
  )
  return (
    <StrictMode >
      <RouterProvider router={routerCustom}/>
    </StrictMode>
  )
}

export default App
