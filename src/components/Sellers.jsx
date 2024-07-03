import React, { useEffect, useState } from 'react'
import { sellersInfo } from '../constants'
import gsap from 'gsap'


function Sellers() {

    const [over, setOver] = useState(true)
    const [indexAvatar, setIndexAvatar] = useState(null)

    return (
        <div className='flex flex-col gap-[1rem]'>
            <h2 className='text-[2em] font-bold'>Best Sellers</h2>
            <div className='flex  gap-[1.5rem] flex-wrap 2xl:justify-start justify-center '>
                {sellersInfo.map((item, index) => (
                    <div onMouseOver={() => { setOver(true), setIndexAvatar(index) }} onMouseLeave={() => setOver(false)} key={index} className='hover:bg-blue-500 hover:translate-y-[-1rem] hover:shadow-md transition-all shadow-lg cursor-pointer flex rounded-xl w-[290px] items-center bg-white p-[1rem]'>
                        <img title={`${item.name} Icon`} src={item.img} alt={`${item.name} icon`} className='w-[4rem]' />
                        <div>
                            <h2 className={`font-bold ${(indexAvatar == index) && over ? "text-white" : 'text-black'} `}>{item.name}</h2>
                            <h3 className={` ${(indexAvatar == index) && over ? 'opacity-[1]' : ' opacity-[.5]'} text-[.9em] `}>{item.view}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Sellers
