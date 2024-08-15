import React, { useState } from 'react'
import { assests } from '../../images/assests'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const [user, setUser] = useState({ username: "", email: "", password: "" })
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setUser((prev) => ({ ...prev, [name]: value }))
        setError(false)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        console.log(user)

        try {
            const response = await fetch(`https://resume-builder-x.vercel.app/api/v1/users/register`, {
                method: "POST",
                headers: {

                    'Content-Type': "application/json"
                },
                body: JSON.stringify(user),

            });

            if (response.ok) {

                const res = await response.json()
                console.log(res)
                setUser({ username: "", email: "", password: "" })
                navigate("/login")
            }
            else {
                setError(true)

            }


        } catch (error) {

            console.log("Error while uploading data on the database", error)
        }
    }

    return (
        <>
            <div className='bg-blue-950 h-[88.7vh] py-7'>

                <form onSubmit={handleSubmit} className=' border flex flex-col  items-center gap-2  w-96 mx-auto bg-white text-black font-serif  rounded-lg py-3 max-lg:w-[90vw] max-lg:mx-auto'>

                    <div className=''>
                        <h1 className='text-2xl font-bold font-sans'>Sign Up</h1>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="username" className='text-[1.4rem]'>Username</label>
                        <input name='username' id='username' type="text" value={user.username} onChange={handleInput} placeholder='Enter username' className=' outline-none text-xl w-80 border-2 border-gray-200 rounded-lg px-3 py-1' autoComplete='off' required />
                    </div>

                    <div className='flex flex-col gap-2'>

                        <label htmlFor="email" className='text-[1.4rem]'>Email</label>
                        <input name="email" id='email' type="email" value={user.email} onChange={handleInput} placeholder='Enter email' className='outline-none text-xl w-80 border-2 border-gray-200 rounded-lg px-3 py-1' autoComplete='off' required />

                    </div>

                    <div className='flex flex-col gap-2 mb-2'>

                        <label htmlFor="password" className='text-[1.4rem]'>Password</label>
                        <input name='password' id='password' value={user.password} onChange={handleInput} type="password" placeholder='Enter password' className='outline-none text-xl w-80 border-2 border-gray-200 rounded-lg px-3 py-1' autoComplete='off' required />

                    </div>

                    {
                        error && <div className='text-red-500'>invalid username or email</div>
                    }

                    <div className='text-center'>

                        <button type='submit' className='rounded-lg bg-orange-600 text-white px-2 text-lg font-bold w-80 h-10 font-sans hover:scale-105 cursor-pointer'>Sign up</button>

                    </div>

                    <div className='flex text-[0.9em] max-lg:text-[0.8em]'>

                        <p className='mx-1'>I agree to the </p>
                        <a href="/terms-and-conditions" className='text-green-600 hover:text-orange-600 cursor-pointer'>terms and conditions

                        </a>
                        <p className='mx-1'>and</p>
                        <a href="/privacy-policy" className='text-green-600 hover:text-orange-600 cursor-pointer'> Privacy Policy.</a>

                    </div>

                    <div className='flex text-[0.9em]'>

                        <p className='mx-1'>Already have an account? </p>
                        <a href="/login" className='text-blue-600 hover:underline cursor-pointer'>Sign In</a>

                    </div>

                </form>
            </div>
        </>
    )
}

export default SignUp