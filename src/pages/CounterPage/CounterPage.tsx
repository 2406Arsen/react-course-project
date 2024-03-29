import { Button } from '../../shared/UI/Button/Button'
import './CounterPage.scss'
import {  useDispatch } from 'react-redux'

export const CounterPage = () => {

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch({
            type: 'increment',
        })
        console.log('increment');

    }
    const handleDecrement = () => {
        dispatch({
            type: 'decrement',
        })
        console.log('decrement');

    }

    return (
        <div className='CounterPage'>
            <Button onClick={handleIncrement} type='secondary'>
                increment
            </Button>
            <h1>{0}</h1>

            <Button onClick={handleDecrement} type='secondary'>
                decrement
            </Button>
        </div>
    )
}