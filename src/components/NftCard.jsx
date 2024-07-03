import { useEffect, useState } from "react"
import { productText } from "../constants"
import { FaBtc } from "react-icons/fa6"
import gsap from "gsap"
function NftCard() {
    const [over, setOver] = useState(true)
    const [indexCard, setIndexCard] = useState(null)

    const [click, setClick] = useState(false)
    return (
        <div id="nftCards" className="flex gap-[2rem] flex-wrap 2xl:justify-start justify-center my-[1rem] ">
            {productText.map((item, index) => {
                if (item.nftJson) {
                    return item.nftJson.map((category, index) => (
                        <div onMouseOver={() => { setIndexCard(index), setOver(true) }} key={index} onMouseLeave={() => { setIndexCard(index), setOver(false) }} className='grid gap-[.6rem] p-[1rem] bg-white shadow-lg overflow-hidden rounded-2xl cursor-pointer transition-all hover:translate-y-[-1rem] hover:shadow-xl duration-[.1s] hover:bg-blue-500 ease-in '>
                            <img title={`${category.heading} Img`} src={category.img} alt={category.heading} className='w-[300px] h-[250px] rounded-3xl' />
                            <h3 className='font-bold text-[1em]'>{category.heading}</h3>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-[.5rem]'>
                                    <div className={` text-white text-[.6em] rounded-full p-[.2rem] ${(indexCard == index) && over ? '  bg-black' : 'bg-blue-500'} transition-all`}><FaBtc /></div>
                                    <span className={`text-[.67em] opacity-[.5] ${(indexCard == index) && over ? 'text-black  font-bold' : 'text-gray-800'}`}>{category.price} BTC</span>
                                </div>
                                <div>
                                    <span className={`text-[.67em] opacity-[.5] ${(indexCard == index) && over ? 'text-black  font-bold' : 'text-gray-800'} `}>{category.own}/{category.left}</span>
                                </div>
                            </div>
                            <div className={` h-[.1rem] w-full  rounded-full ${(indexCard == index) && over ? 'bg-black' : 'bg-gray-300'}`} />
                            <div className='flex justify-between items-center'>
                                <div className={`px-[.8rem] py-[.2rem] text-[.8em] ${(indexCard == index) && over ? 'bg-black text-white' : 'bg-gray-200'} rounded-full transition-all ease-in`}>
                                    2h 3m 3s
                                </div>
                                <span className={`text-[.8em] ${(indexCard == index) && over ? 'text-black  font-bold' : 'text-blue-500'} cursor-pointer hover:opacity-[.5] transition-all ease-out`}>Place a Bid</span>
                            </div>
                        </div>
                    ))
                }
            })}
        </div>
    )
}

export default NftCard
