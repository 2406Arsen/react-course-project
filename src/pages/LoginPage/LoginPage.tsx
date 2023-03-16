import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '../../Components/Input/Input'
import { USER_LOCALSTORAGE_KEY } from '../../constants/localStorage'
import './LoginPage.scss'

export const LoginPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    const newUser = { username, password }
    alert(JSON.stringify(newUser, null, 2))
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(newUser))
    setUsername('')
    setPassword('')
    navigate('/')
  }

  return (
    <div className="LoginPage">
      <Input
        type='text'
        placeholder='enter username'
        label='Username'
        value={username}
        onChange={handleChangeUsername}
      />
      <Input
        type='password'
        placeholder='enter password'
        label='password'
        value={password}
        onChange={handleChangePassword}
      />

      <button className='loginBtn' onClick={handleLogin}>login </button>
    </div>
  )
}