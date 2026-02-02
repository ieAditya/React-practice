import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import BaseLayout from './Components/Layout/BaseLayout';
import { StrictMode } from 'react';
import Home from './Components/Home';
import List from './Components/List';

function App() {

  const routerCustom = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<BaseLayout />}>
        <Route path='' element={<Home />} />
        <Route path='list' element={<List />} />
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
