import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import SignUp from './components/signUp/SignUp.jsx'
import Login from './components/login/Login.jsx'
import ForgetPassword from './components/forgetPassword/ForgetPassword.jsx'
import Body from './components/Body/Body.jsx'

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="" element={<App />}>

      <Route path='/' element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="create-resume" element={<Body />} />

    </Route >

  )

)

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>

    {/* <React.StrictMode>
      <App />
    </React.StrictMode>, */}
  </RouterProvider>
)
