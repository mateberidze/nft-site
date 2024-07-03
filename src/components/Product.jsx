import React from 'react'
import { productText } from '../constants'
import NftCard from './NftCard';

function Product() {

    return (
        <div>
            <div className='flex flex-col gap-[1.5rem]'>
                <h2 className='text-[2em] font-bold'>Super Hot <span className='text-blue-500'>NFT's</span></h2>

                <ul className='flex gap-[1rem] flex-wrap'>
                    {productText.map((item, index) => {
                        // Check if categoryJson exists before mapping over it
                        if (item.categoryJson && Array.isArray(item.categoryJson))
                            return item.categoryJson.map((category, index) => (
                                <li key={index} className='bg-gray-200 rounded-xl px-[.8rem] py-[.2rem] cursor-pointer hover:bg-black hover:text-white ease-in transition-all '>{category.label}</li>
                            ));
                    })}
                </ul>
                <NftCard />

            </div>
        </div>
    )
}

export default Product
