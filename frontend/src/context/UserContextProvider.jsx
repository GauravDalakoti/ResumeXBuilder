import React, { useEffect, useState } from "react";
import userContext from "./UserContext/userContext.js";

const UserContextProvider = ({ children }) => {


    const [login, setLogin] = React.useState(false)
    const [userData, setUserData] = React.useState({ username: "", email: "" })
    console.log(userData);

    const Authentication = () => {

        const auth = localStorage.getItem("AccessToken")

        if (auth) {

            setLogin(prev => (prev = !prev))
        }
    }

    useEffect(() => {

        Authentication()
        const username = localStorage.getItem("username")
        const email = localStorage.getItem("email")
        setUserData({ username: username, email: email })

    }, [])


    console.log(login)
    return (
        <userContext.Provider value={{ login, setLogin, userData, setUserData }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider