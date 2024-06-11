import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const AuthContext = createContext(null)

const AuthState = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem("token") ? true : false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getUser = async () => {
        setIsLoading(true)
        try {
            const res = await axios({
                method: "get",
                url: "/api/user",
                headers: {
                    authtoken: localStorage.getItem("token")
                }
            })
            setUser(res.data.foundUser)
        } catch (error) {
            alert(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getUser()
        }
    }, [localStorage.getItem("token")])

    return (
        <AuthContext.Provider value={{ isSignedIn, user, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
