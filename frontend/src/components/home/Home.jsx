import React from 'react'
import Typewriter from "typewriter-effect";
import "../../App.css"
import { assests } from '../../images/assests'

function Home() {

    return (
        <div className='mainSection min-h-[90vh]' >

            <div className='w-[90vw] mx-auto flex justify-around py-8 max-lg:flex-col max-lg:items-center'>

                <div className='w-[50vw] my-16 max-lg:w-[90vw]'>

                    <h1 className='text-center text-4xl mb-6 font-semibold bg-gradient-to-r from-blue-700 via-red-500 to-yellow-400 text-transparent bg-clip-text animate-gradient'>Quality Resume Make Diffrence,</h1>

                    <div className='h-44 text-center text-5xl font-serif mb-3 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient max-lg:h-64'>

                        <Typewriter
                            options={{
                                strings: ['Create Best Quality Resume to Hired At Top Compenies', 'Generate Summary for your resume using AI'],
                                autoStart: true,
                                loop: true,

                            }}
                        />

                    </div>
                    <div className='w-40 mx-auto'>
                        <a href="/create-resume"><button className='bg-green-600 text-white rounded-lg px-2 py-2 font-semibold text-xl hover:scale-105'>Create resume</button></a>
                    </div>
                </div>
                <div className=''>
                    <img src={assests.exampleresume} alt="" width={"400"} height={"200"} className='hover:scale-105' />
                </div>
            </div>
            <div className='text-center mt-10'>

                <span className='font-serif text-4xl mb-3 font-semibold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>To create a resume you can follow the steps given below:-</span>

                <div className='flex gap-8 flex-col py-4 '>
                    <div>
                        <p className='text-2xl font-semibold bg-gradient-to-r from-red-700 via-yellow-500 to-green-600 text-transparent bg-clip-text animate-gradient'>Step 1: Click on Create Resume</p>
                    </div>
                    <div className='flex flex-col gap-5 justify-center'>
                        <p className='text-2xl font-semibold bg-gradient-to-r from-red-700 via-yellow-500 to-green-600 text-transparent bg-clip-text animate-gradient'>Step 2: fill The Details</p>
                        <img className='mx-auto hover:scale-105' src={assests.form} alt="" width={300} />
                    </div>
                    <div>
                        <p className='text-2xl font-semibold bg-gradient-to-r from-red-700 via-yellow-500 to-green-600 text-transparent bg-clip-text animate-gradient'>Step 3: click download button to download your resume</p>
                    </div>

                </div>
            </div>

            <div className='py-5'>

                <div className='pb-5 text-center text-5xl font-semibold bg-gradient-to-r from-yellow-300 via-orange-500 to-blue-600 text-transparent bg-clip-text animate-gradient'>Drag and drop to customize your resume</div>
                <video src={assests.video} className='mx-auto w-[40vw] ' autoPlay loop controls muted></video>
            </div>
        </div>
    )
}

export default Home