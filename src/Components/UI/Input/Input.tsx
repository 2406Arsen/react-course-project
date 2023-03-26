import { memo } from 'react'
import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}


export const Input = memo((props: InputProps) => {
    const { label, ...inputProps } = props

    return (
        <div className="Input">
            {label && <span> {label} </span>}

            <input type="text" {...inputProps} />
        </div>
    )
}
    // , (prevProps, nextProps) => {
    //     //component render condition 
    //     if (prevProps.value !== nextProps.value) {
    //         return false // return false meaning that component should be updated when condition was true
    //     }
    //     return true
    // }
)