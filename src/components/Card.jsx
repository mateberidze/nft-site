import React, { useState } from 'react'
import IconRenderer from './IconRenderer'
function Card(props) {
    const [over, setOver] = useState(true)
    return (
        <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className='bg-white transition-all shadow-lg cursor-pointer p-[1rem] rounded-xl
        hover:bg-black hover:text-white
        hover:translate-y-[-1rem] '>
            <dir className='flex items-center gap-[.5rem]'>
                <IconRenderer key={2} icon={props.icon} class={`${props.class}`} />
                <h2 className='text-[1em] font-bold '>{props.heading}</h2>
            </dir>
            <p className={`max-w-[25rem] ${!over ? 'opacity-[.7]' : 'opacity-1'} text-[1em] font-bold`}>{props.paragraph}</p>
        </div>
    )
}

export default Card
