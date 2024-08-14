import React from 'react'
import "../../App.css"
import { assests } from '../../images/assests'

function Footer() {
    return (
        <div className='footer bg-slate-700 text-gray-300'>

            <div className='py-8 w-[95vw] mx-auto'>
                <hr />
                <div className='flex justify-around max-lg:flex-col max-lg:items-center'>
                    <div className='my-4'>@ 2024 resume builder. All Rights Reserved.</div>
                    <div>
                        <p className='my-4 font-serif font-semibold text-white max-lg:text-center'>Connect with us on social media</p>
                        <ul className='flex flex-col gap-2 my-6 max-lg:flex-row max-lg:gap-8'>
                            <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400 max-lg:flex-col max-lg:items-center'><img src={assests.facebook} alt="" width={30} />Facebook</a></li>
                            <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400 max-lg:flex-col max-lg:items-center'><img src={assests.instagram} alt="" width={30} />Instagram</a></li>
                            <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400 max-lg:flex-col max-lg:items-center'><img src={assests.linkedin} alt="" width={30} />linkedin</a></li>
                            <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400 max-lg:flex-col max-lg:items-center'><img src={assests.github} alt="" width={30} />Github</a></li>
                        </ul>
                    </div>

                    <div className="flex gap-16 max-lg:gap-5">
                        <div>
                            <p className='my-4 font-serif font-semibold text-white'>Resumes</p>
                            <ul className='flex flex-col gap-2 my-6'>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>Resume Example</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>Resume Templates</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>Resume Summary Generator</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>Modern resume Templates</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>How to Write a Resume</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className='my-4 font-serif font-semibold text-white'>Support</p>
                            <ul className='flex flex-col gap-2 my-6'>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>FAQ</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>Contact us</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>Terms of service</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>privacy policy</a></li>
                                <li><a href="/" className='flex gap-2 hover:underline hover:text-blue-400'>Cookie policy</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer