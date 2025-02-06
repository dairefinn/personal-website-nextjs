import { PropsWithChildren } from 'react'
import './Card.scss'

function Card(props: PropsWithChildren) {
    return (
        <div className="container-component-card">
            {props.children}
        </div>
    )
}

export default Card