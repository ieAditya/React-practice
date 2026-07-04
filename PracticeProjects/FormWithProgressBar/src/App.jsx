import { useEffect } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import BaseLayout from './Layout/BaseLayout';
import PersonalDetail from './Component/PersonalDetail';
import EducationForm from './Component/EducationForm';
import WorkExperienceForm from './Component/WorkExperienceForm';
import AddressForm from './Component/AddressForm';


const customRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<BaseLayout />} >
        <Route path='' element={<PersonalDetail />} />
        <Route path='education' element={<EducationForm />} />
        <Route path='work-experience' element={<WorkExperienceForm />} />
        <Route path='address' element={<AddressForm />} />
      </Route>
    )
  );

function App() {

  useEffect(()=> {
    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <RouterProvider router={customRouter} />
  )
}

export default App
