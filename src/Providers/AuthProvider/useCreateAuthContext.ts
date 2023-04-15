import { useState, useEffect, useCallback } from 'react'

import { useNavigate } from "react-router-dom";
import useLocalStorage from '../../shared/hooks/useLocalStorage';
import { LOCALSTORAGE_KEYS } from "../../shared/constants/localStorage"

interface User {
    username: string;
    password: string;
}


export function useCreateAuthContext() {
    const navigate = useNavigate()

    const [userAuth, setUserAuth] = useLocalStorage<User | null>(LOCALSTORAGE_KEYS.USER_KEY, null)

    useEffect(() => {
        if (!userAuth) {
            navigate('/login')
        }
    }, [])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleChangeUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }, [])

    const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }, [])

    const handleLogin = useCallback(() => {
        const newUser = { username, password }
        console.log(newUser);

        setUserAuth(newUser)
        setUsername('')
        setPassword('')
        navigate('/')
    }, [navigate, password, setUserAuth, username])

    const handleLogout = useCallback(() => {
        setUserAuth(null)
        navigate('/login')
    }, [navigate, setUserAuth])


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

