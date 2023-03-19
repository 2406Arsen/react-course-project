import './Navbar.scss'

import { AppLink } from "../UI/AppLink/AppLink"
import { Button } from '../UI/Button/Button'
import useAuth from '../hooks/useAuth'


export const Navbar = () => {
    const { userIsAuth, logOut } = useAuth()

    return (
        <div className="Navbar">
            {userIsAuth
                ? <span className="links">
                    <AppLink to='/' >home</AppLink>
                    <AppLink to='/todo'>todo</AppLink>
                    <AppLink to='/login'>login</AppLink>
                </span>
                : <span className="links">
                    <AppLink to='/login'>login</AppLink>
                </span>
            }

            <Button onClick={logOut}>log out</Button>
        </div>
    )
}