import { useState } from 'react'

import { useNavigate } from "react-router-dom";
import { LOCALSTORAGE_KEYS } from "../../constants/localStorage"
import useLocalStorage from "./useLocalStorage"

interface User {
    username: string;
    password: string;
}


function useAuth() {
    const navigate = useNavigate()
    
    const [userAuth, setUserAuth] = useLocalStorage<User | null>(LOCALSTORAGE_KEYS.USER_KEY, null)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if (!!userAuth) {
        navigate('/login')
    }
    
    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }



    const handleLogin = () => {
        const newUser = { username, password }
        alert(JSON.stringify(newUser, null, 2))
        setUserAuth(newUser)
        setUsername('')
        setPassword('')
        navigate('/')
    }

    const handleLogout = () => {
        setUserAuth(null)
        navigate('/login')
    }



    return {
        logIn: handleLogin,
        logOut: handleLogout,
        user: { username, password } as User,
        username,
        password,
        changeUsername: handleChangeUsername,
        changePassword: handleChangePassword,
        userIsAuth: !!userAuth
    }
}

export default useAuth