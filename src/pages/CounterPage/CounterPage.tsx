import { Button } from '../../shared/UI/Button/Button'
import './CounterPage.scss'
import { useSelector, useDispatch } from 'react-redux'

export const CounterPage = () => {
    const state = useSelector(state => state) as any

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
            <h1>{state.counter.count}</h1>

            <Button onClick={handleDecrement} type='secondary'>
                decrement
            </Button>
        </div>
    )
}