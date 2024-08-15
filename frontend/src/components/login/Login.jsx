import React, { useState, useContext } from 'react'
import { assests } from '../../images/assests'
import { useNavigate } from 'react-router-dom'
import userContext from '../../context/UserContext/userContext.js'

function Login() {

  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { login, setLogin, userData, setUserData } = useContext(userContext)

  const handleInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setUser((prev) => ({ ...prev, [name]: value }))
    setError(false)

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const response = await fetch(`https://resume-builder-x.vercel.app/api/v1/users/login`, {
        method: "POST",
        headers: {

          'Content-Type': "application/json"
        },
        body: JSON.stringify(user),

      });

      if (response.ok) {

        const res = await response.json()
        localStorage.setItem("AccessToken", res.data.accessToken)
        localStorage.setItem("email", res.data.loggedInUser.email)
        localStorage.setItem("username", res.data.loggedInUser.username)
        setUserData({ username: res.data.loggedInUser.username, email: res.data.loggedInUser.email })

        setUser({ email: "", password: "" })
        setLogin(prev => (prev = !prev))
        navigate("/create-resume")

      }
      else {

        setError(true)
      }

      // const res = await response.json()

      // console.log(res.data.loggedInUser)
    } catch (error) {

      console.log("Error while uploading data on the  database", error)
    }
  }

  return (
    <>

      <div className='bg-blue-950 h-[88.7vh] py-7 '>

        <form onSubmit={handleSubmit} className=' border flex flex-col items-center gap-3  w-96 mx-auto bg-white text-black font-serif  rounded-lg py-4 max-lg:w-[90vw] max-lg:mx-auto'>

          <div className=''>
            <h1 className='text-2xl font-bold font-sans'>Sign In</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-[1.4rem]'>email</label>
            <input name='email' id='email' type="email" placeholder='Enter your email' className=' outline-none text-xl w-80 border-2 border-gray-200 rounded-lg px-3 py-1' value={user.email} onChange={handleInput} autoComplete='off' required />
          </div>
          <div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="password" className='text-[1.4rem]'>Password</label>
              <input name='password' id='password' type="password" placeholder='Enter password' className='outline-none text-xl w-80 border-2 border-gray-200 rounded-lg px-3 py-1' value={user.password} onChange={handleInput} autoComplete='off' required />
            </div>

            <div className='flex justify-between w-80 mt-1'>
              <p></p>
              <a href='/forget-password' className='text-blue-600 hover:underline font-sans cursor-pointer'>forget your password?</a>
            </div>

          </div>
          {
            error && <div className='text-red-500'>invalid email or password</div>
          }
          <div>
            <button type='submit' className='rounded-lg bg-orange-600 text-white px-2 text-lg font-bold font-sans w-80 h-10 hover:scale-105 cursor-pointer'>Log in</button>
          </div>

          <div className='flex text-[0.9em] max-lg:text-[0.8em]'>
            <p className='mx-1'>I agree to the</p>
            <a href="/terms-and-conditions" className='text-green-600 hover:text-orange-600 cursor-pointer'>terms and conditions </a>
            <p className='mx-1'>and</p>
            <a href="/privacy-policy" className='text-green-600 hover:text-orange-600 cursor-pointer'>Privacy Policy.</a>
          </div>

          <div className='flex gap-1 items-center'>

            <p>Don't have an account?</p>
            <a href='/sign-up' className='text-blue-600 hover:underline font-sans cursor-pointer'>Sign Up</a>
          </div>

        </form>
      </div>
    </>
  )
}

export default Login