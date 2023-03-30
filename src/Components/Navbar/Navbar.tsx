import './Navbar.scss'

import { AppLink } from "../UI/AppLink/AppLink"
import { Button } from '../UI/Button/Button'
import { useAuth } from '../../Providers/AuthProvider'

export const Navbar = () => {
    const { userIsAuth, logOut } = useAuth()

    return (
        <div className="Navbar">
            {userIsAuth
                ? <span className="links">
                    <AppLink to='/' >home</AppLink>
                    <AppLink to='/todo'>todo</AppLink>
                    <AppLink to='/posts'>Posts</AppLink>
                </span>
                : <span className="links">
                    <AppLink to='/login'>login</AppLink>
                    <AppLink to='/posts'>Posts</AppLink>
                </span>
            }

            <Button onClick={logOut}>log out</Button>
        </div>
    )
}