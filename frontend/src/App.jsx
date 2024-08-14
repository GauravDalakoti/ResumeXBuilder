import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </>

  )
}

export default App
