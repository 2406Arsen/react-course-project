
import useRegistration from '../../Components/hooks/useRegistration'
import { Button } from '../../shared/UI/Button/Button'
import { Input } from '../../shared/UI/Input/Input'
import './CreateUserPage.scss'

export const CreateUserPage = () => {
    const {
        handleChangePassword,
        handleChangeUsername,
        password,
        username,
        createNewUser
    } = useRegistration()

    return (
        <div className='CreateUserPage'>
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

            <Button type='secondary' onClick={createNewUser}>create user</Button>
        </div>
    )
}