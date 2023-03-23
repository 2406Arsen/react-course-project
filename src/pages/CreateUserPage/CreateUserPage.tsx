
import useRegistration from '../../Components/hooks/useRegistration'
import { Button } from '../../Components/UI/Button/Button'
import { Input } from '../../Components/UI/Input/Input'
import './CreateUserPage.scss'

interface CreateUserPageProps {
}


export const CreateUserPage = ({ }: CreateUserPageProps) => {
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