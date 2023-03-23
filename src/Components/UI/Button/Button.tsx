import './Button.scss'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    children: React.ReactNode,
    type?: 'primary' | 'secondary',
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}


export const Button = (props: ButtonProps) => {

    const {
        children,
        type = 'primary',
        htmlType,
        ...rest
    } = props

    return (

        <button {...rest} type={htmlType} className={`Button ${type}`}>
            {children}
        </button>
    )
}