
import './LoginPage.scss'

import { useAuth } from 'Providers/AuthProvider'
import { AppLink } from 'shared/UI/AppLink/AppLink'
import { Input } from 'shared/UI/Input/Input'


const LoginPage = () => {
  const {
    logIn,
    changeUsername,
    changePassword,
    password,
    username
  } = useAuth()

  return (
    <div className="LoginPage">
      <Input
        type='text'
        placeholder='enter username'
        label='Username'
        value={username}
        onChange={changeUsername}
      />
      <Input
        type='password'
        placeholder='enter password'
        label='password'
        value={password}
        onChange={changePassword}
      />

      <button className='loginBtn' onClick={logIn}> login </button>

      <AppLink to='/createUser'>create user</AppLink>

    </div>
  )
}

export default LoginPage