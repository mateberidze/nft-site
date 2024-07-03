import React, { useEffect, useState } from 'react'
import { heroText } from '../constants'
import { Nft } from '../assets'
import { CgShoppingBag } from 'react-icons/cg'
import { gsap } from 'gsap'



function Hero() {
    const [click, setClick] = useState(false)
    const [clickMb, setClickMb] = useState(false)

    useEffect(() => {
        const splitText = (text, addictt) => {

            const content = document.getElementById(`${text}`);
            const addict = addictt

            // Split text into individual characters
            const characters = content.innerText.split('');
            const counter = characters.length;

            // Clear the original content
            content.innerHTML = '';

            // Wrap each character in a span and append it back to the container
            characters.forEach((char, index) => {
                const charElement = document.createElement('span');
                if (index >= counter - 3 && addict) {
                    charElement.classList.add('text-blue-500');
                }
                charElement.textContent = char;
                content.appendChild(charElement);
            });
            return content
        }
        const heroContent = splitText('newHeroText', true)

        // Animate using GSAP
        gsap.from(heroContent.children, {
            opacity: 0,
            y: 100,
            stagger: 0.05,
            duration: 2,
            ease: 'power2.out',
            repeat: Infinity,

        });
        // Animate IMG using GSAP 
        gsap.fromTo('#mainNftIcon', {
            opacity: 0,
            x: 100,
            stagger: 0.05,
            duration: 2,
            ease: 'power4.out',
            repeat: 1,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.05,
            duration: 2,
            ease: 'power4.out',
            repeat: 0,
            delay: .8,

        })
        const heroParagraph = splitText('heroParagraph')
        gsap.from(heroParagraph.children, {
            opacity: 0,
            y: 100,
            stagger: .001,
            duration: 2,
            ease: 'power1.out',
        })
    }, [])



    return (

        < div className='flex justify-between md:flex-row flex-col-reverse items-center' >
            <div className='flex flex-col gap-[1rem]'>
                <h1 id="newHeroText" className='xl:text-[5em] text-[3em] font-bold'>Let's Buy Some <br />
                    <span className=' text-blue-500'>NFT</span></h1>

                {heroText.map((item, index) => (
                    <p id='heroParagraph' key={index} className='text-[1em] max-w-[500px] opacity-[.7] '>{item.content}</p>
                ))}
                <div onClick={() => setClickMb(!clickMb)} onMouseOver={() => setClick(true)} onMouseLeave={() => setClick(false)} className='w-[14rem] h-[4rem] px-[2rem] py-[1rem] gap-[.5rem] overflow-hidden flex items-center justify-start bg-black text-white  cursor-pointer rounded-[50px] shadow-md '>
                    <div className={` ${click || clickMb ? 'opacity-0 absolute z-[-1] ' : 'opacity-[1]'}   transition-all  ease-in bg-white rounded-full text-[2rem]  p-[.5rem]`}>
                        <CgShoppingBag className='text-[#000]' />

                    </div>
                    <span className={`${(click || clickMb) && 'text-[1.5em]  absolute'}  duration-00 transition-all `}>Buy Now</span>

                </div>
            </div>
            <div>
                <img id='mainNftIcon' title='Main NFT Img' src={Nft} alt="Main Nft Img" />
            </div>
        </div >
    )
}

export default Hero
