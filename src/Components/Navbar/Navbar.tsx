import cls from './Navbar.module.scss'

import { useAuth } from '../../Providers/AuthProvider'
import { AppLink } from '../../shared/UI/AppLink/AppLink'
import { Button } from '../../shared/UI/Button/Button'

export const Navbar = () => {
    const { userIsAuth, logOut } = useAuth()

    return (
        <div className={cls.Navbar}>
            {userIsAuth
                ? <span className={cls.links}>
                    <AppLink to='/' >home</AppLink>
                    <AppLink to='/todo'>todo</AppLink>
                    <AppLink to='/posts'>Posts</AppLink>
                    <AppLink to='/counter'>Counter</AppLink>
                </span>
                : <span className={cls.links}>
                    <AppLink to='/counter'>Counter</AppLink>
                    <AppLink to='/login'>login</AppLink>
                    <AppLink to='/posts'>Posts</AppLink>
                </span>
            }

            <Button onClick={logOut}>log out</Button>
        </div>
    )
}