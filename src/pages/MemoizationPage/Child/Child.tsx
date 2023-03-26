import { FC, memo } from 'react'
import './Child.scss'

interface ChildProps {
    text: string
}

export const Child: FC<ChildProps> = memo<ChildProps>(({ text }) => {

    return (
        <div className='Child'>
            {text}
        </div>
    )
},
    //  (prevProps, nextProps) => {
    //     if (prevProps.text !== nextProps.text && nextProps.text.length > 5) {
    //         return false
    //     }
    //     return true
    // }
)