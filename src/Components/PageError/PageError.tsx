import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/UI/Button/Button'
import './PageError.scss'

export const PageError = () => {
    const navigate = useNavigate()
    return (
        <div className="PageError">
            something went wrong


            <Button onClick={() => {
                navigate('/')
                // eslint-disable-next-line no-restricted-globals
                location.reload()
            }} type='secondary'>Go to home page</Button>
        </div>
    )
}