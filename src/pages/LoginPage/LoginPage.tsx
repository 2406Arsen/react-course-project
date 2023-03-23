
import { AppLink } from '../../Components/UI/AppLink/AppLink'
import { Input } from '../../Components/UI/Input/Input'
import { useAuth } from '../../Providers/AuthProvider'
import './LoginPage.scss'


export const LoginPage = () => {
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