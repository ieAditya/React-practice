import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import './index.css'
import BasicLayout from './Layout/BasicLayout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github from './components/Github/Github.jsx';
import { githubInfoLoader } from './Loaders/GithubInfoLoader.js';
import { employeesListLoader } from './Loaders/EmployeeListLoader.js';
import { employeeProfileLoader } from './Loaders/EmployeeProfileLoader.js';
import Employees from './components/Employees/Employees.jsx';
import EmployeeProfile from './components/Employees/EmployeeProfile.jsx';

const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<BasicLayout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
        path='github'
        element={<Github />}
        loader={(githubInfoLoader)}
      />
      <Route
        path='employees'
        element={<Employees />}
        loader={(employeesListLoader)}
      />
      <Route
      path='employee/:id'
      element={<EmployeeProfile />}
      loader={(employeeProfileLoader)}
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {myRoute} />
  </StrictMode>,
)
