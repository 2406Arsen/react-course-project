import './Button.scss'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    children: React.ReactNode,
    type?: 'primary' | 'secondary',
}


export const Button = (props: ButtonProps) => {

    const {
        children,
        type = 'primary',
        ...rest
    } = props

    return (

        <button {...rest} className={`Button ${type}`}>
            {children}
        </button>
    )
}