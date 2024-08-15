import { assests } from "../../images/assests"
import "../../App.css"
import userContext from "../../context/UserContext/userContext"
import { useContext, useState } from "react"

function Header() {


    const { login, setLogin, userData, setUserData } = useContext(userContext)
    const [userDetails, setUserDetails] = useState(false)

    const logOutHandler = async () => {

        console.log("true");
        
        const response = await fetch("https://resume-builder-x.vercel.app/api/v1/users/logout", {

            method: "POST",
            headers: {

                'Content-Type': "application/json"
            },
            body: JSON.stringify()
        })
        const res = response.json()

        if (response.ok) {

            console.log("true")
            setLogin(false)
            localStorage.removeItem("AccessToken")
            localStorage.removeItem("email")
            localStorage.removeItem("username")
            setUserData({ username: "", email: "" })

        }
        console.log(res);
    }

    const [displayMenu, setDisplayMenu] = useState(false)

    return (

        <>
            <header className="py-1 sticky top-0 z-40">
                <nav className="flex justify-around items-center">
                    <div className="flex gap-1 items-center">
                        <img src={assests.logo} alt="logo image" width={55} />
                        <span className="text-2xl">resumeXbuilder</span>
                    </div>

                    <ul className="flex items-center gap-8 text-xl max-lg:hidden">
                        <li className="flex items-center justify-center gap-1 hover:scale-105">
                            <img src={assests.home} alt="" width={25} />
                            <a href="/" className="  hover:text-gray-300">Home</a>
                        </li>

                        <li className="flex items-center justify-center gap-1 hover:scale-105">
                            <img src={assests.contact} alt="" width={25} />
                            <a href="/contact-us" className=" hover:text-gray-300">Contact us</a>
                        </li>
                    </ul>

                    <div className="lg:hidden">
                        <img onClick={() => setDisplayMenu(prev => prev = !prev)} src={assests.menu} alt="" width={30} />
                    </div>

                    <div className="max-lg:hidden">
                        {
                            login ? (

                                <div className="flex gap-4 ">
                                    {userDetails &&
                                        <div className="px-6 py-8 bg-cyan-700 text-white flex flex-col gap-2 text-xl font-bold rounded-lg absolute top-16 right-10">
                                            <div className="flex flex-col">
                                                <span className="text-amber-500">Username:</span>
                                                <span className="text-xl font-semibold"> {userData.username}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-amber-500">Email:</span>
                                                <span className="text-xl font-semibold">{userData.email}</span>
                                            </div>
                                        </div>
                                    }
                                    <img onMouseOver={() => setUserDetails(true)} onMouseLeave={() => setUserDetails(false)} src={assests.user} alt="" width={35} />
                                    <div>
                                        <button onClick={logOutHandler} className="bg-sky-600 text-white px-3 py-1 rounded-xl hover:scale-[106%] border-2 border-gray-300 font-bold ">logout</button>
                                    </div>
                                </div>

                            )
                                : (
                                    <div className="flex gap-2">
                                        <a href="/login">
                                            <button className="bg-sky-600 text-white px-3 py-1 rounded-xl hover:scale-[106%] border-2 border-gray-300 font-bold ">login</button>
                                        </a>
                                        <a href="/sign-up">
                                            <button className="bg-sky-600 text-white px-3 py-1 rounded-xl hover:scale-[106%] border-2 border-gray-300 font-bold">signup</button>
                                        </a>
                                    </div>
                                )
                        }
                    </div>

                </nav >

            </header >

            {displayMenu &&
                <div className={`w-[80vw] h-[80vh] z-50 bg-cyan-800 text-white fixed top-0 right-0 p-4 lg:hidden`}>

                    <div className="lg:hidden flex justify-end mb-10 px-2">
                        <img onClick={() => setDisplayMenu(prev => prev = !prev)} src={assests.cross} alt="" width={35} />
                    </div>

                    <ul className="flex flex-col w-44 mx-auto gap-8 text-xl mb-10">
                        <li className="flex  gap-2 hover:scale-105">
                            <img src={assests.home} alt="" width={25} />
                            <a href="/" className="  hover:text-gray-300">Home</a>
                        </li>

                        <li className="flex  gap-2 hover:scale-105">
                            <img src={assests.contact} alt="" width={25} />
                            <a href="/contact-us" className=" hover:text-gray-300">Contact us</a>
                        </li>
                    </ul>

                    <div className="">
                        {
                            login ? (<div className="flex gap-4 justify-center">
                                {userDetails &&
                                    <div className="px-4 py-4 border-2 border-white bg-cyan-700 mx-auto text-white flex flex-col gap-2 text-xl font-bold rounded-lg absolute bottom-6">
                                        <div className="flex flex-col">

                                            <span className="text-amber-500">Username:</span>
                                            <span className="text-xl font-semibold"> {userData.username}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-amber-500">Email:</span>
                                            <span className="text-xl font-semibold">{userData.email}</span>
                                        </div>
                                    </div>
                                }
                                <img onMouseOver={() => setUserDetails(true)} onMouseLeave={() => setUserDetails(false)} src={assests.user} alt="" width={35} />
                                <div>
                                    <button onClick={logOutHandler} className="bg-sky-600 text-white px-3 py-1 rounded-xl hover:scale-[106%] border-2 border-gray-300 font-bold ">logout</button>
                                </div>
                            </div>
                            )
                                : (
                                    <div className="flex justify-center gap-5">
                                        <a href="/login">
                                            <button className="bg-sky-600 text-white px-3 py-1 rounded-xl hover:scale-[106%] border-2 border-gray-300 font-bold ">login</button>
                                        </a>
                                        <a href="/sign-up">
                                            <button className="bg-sky-600 text-white px-3 py-1 rounded-xl hover:scale-[106%] border-2 border-gray-300 font-bold">signup</button>
                                        </a>
                                    </div>
                                )
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Header