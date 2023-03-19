import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}


export const Input = (props: InputProps) => {
    const { label, ...inputProps } = props

    return (
        <div className="Input">
            {label && <span> {label} </span>}

            <input type="text" {...inputProps} />
        </div>
    )
}