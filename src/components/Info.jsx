import React, { useEffect } from 'react'
import { Card } from '../components'
import { infoText } from '../constants'


function Info() {

    return (
        <div className='flex justify-between md:flex-row  flex-col-reverse items-center'>
            <div className='flex flex-col gap-[2rem] md:max-w-full max-w-[31rem] '>

                <h2 className='text-[2em] font-bold'>Sell Your <span className='text-blue-500'>NFT's</span></h2>
                <div className='flex gap-[2rem] flex-wrap items-center justify-center'>
                    {infoText.map((item, index) => (
                        <Card key={index} heading={item.heading} class={'text-[2rem]'} paragraph={item.paragraph} icon={item.icon} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Info
