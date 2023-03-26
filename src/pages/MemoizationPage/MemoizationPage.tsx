import { useCallback, useEffect, useMemo, useState } from 'react'
import { Input } from '../../Components/UI/Input/Input'
import { Child } from './Child/Child'
import './MemoizationPage.scss'

export const MemoizationPage = () => {
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')
    // useMemo
    const user = useMemo(() => {
        return ({
            firstName: "Arsen",
            lastName: "Barseghyan",
            age: 22
        })
    }, [])

    const counter = useMemo(() => {
        let sum = 0
        for (let i = 0; i < 1000000000; i++) {

            sum += i
        }
        console.log(sum, 'sum');

        return sum
    }, [])

    const handleChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        console.log(counter);
    }, [counter])

    const handleChangeText2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText2(e.target.value)
    }, [])

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className='MemoizationPage'>
            <div className='inputWrapper'>

                <Input
                    placeholder='add text'
                    label='label'
                    value={text}
                    onChange={handleChangeText}
                />
                <Input
                    placeholder='add text 2'
                    label='label 2'
                    value={text2}
                    onChange={handleChangeText2}
                />
                <p>{`${text} <-- text`}</p>
                <p>{`${text2} <-- text2`}</p>
            </div>
            <Child text={text2} />
        </div>
    )
}