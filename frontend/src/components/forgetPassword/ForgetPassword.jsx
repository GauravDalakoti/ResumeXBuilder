import React from 'react'

function ForgetPassword() {
    return (

        <>
            <div className='bg-blue-950 h-[88.7vh] py-12'>

                <form action="#" method='post' className=' border flex flex-col items-center gap-5 w-96 mx-auto bg-white text-black font-serif  rounded-lg py-4 max-lg:w-[90vw] max-lg:mx-auto'>

                    <div className=''>
                        <h1 className='text-2xl font-bold font-sans'>Forget your password</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="usernameOrPassword" className='text-[1.4rem]'>email</label>
                        <input name='' id='usernameOrPassword' type="text" placeholder='Enter username or email' className=' outline-none text-xl w-80 border-2 border-gray-200 rounded-lg px-3 py-1' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className='text-[1.4rem]'>Enter new password</label>
                        <input id='password' type="password" placeholder='Enter new password' className='outline-none text-xl w-80 border-2 border-gray-200 rounded-lg px-3 py-1' />
                    </div>

                    <div className='flex gap-1'>
                        <div>
                            <input type="checkbox" className='w-4 h-4 ' />
                        </div>
                        <div className='flex text-[0.9em]'>
                            <p className='mx-1'>I agree the</p>
                            <a href="/terms-and-conditions" className='text-green-600 hover:text-orange-600 cursor-pointer'>terms</a>
                            <p className='mx-1'>and</p>
                            <a href="/privacy-policy" className='text-green-600 hover:text-orange-600 cursor-pointer'>Privacy Policy.</a>
                        </div>
                    </div>

                    <div>
                        <button className='rounded-lg bg-orange-600 text-white px-2 text-lg font-bold font-sans w-80 h-10 hover:scale-105 cursor-pointer'>Submit</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default ForgetPassword