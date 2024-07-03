import React from 'react'

function IconRenderer(props) {
    const Icon = props.icon
    return (
        <div className={`${props.class}`}>
            <Icon />
        </div>
    )
}

export default IconRenderer
