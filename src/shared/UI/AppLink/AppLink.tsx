
import { Link } from 'react-router-dom'
import './AppLink.scss'

interface AppLinkProps {
    to: string;
    children: React.ReactNode
    theme?: 'clear' | 'normal'

}


export const AppLink = ({ children, to, theme = "normal" }: AppLinkProps) => {
    return (
        <span className={`AppLink ${theme}`}>
            <Link to={to} >{children}</Link>
        </span>
    )
}