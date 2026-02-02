import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

function BaseLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default BaseLayout