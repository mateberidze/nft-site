

{/* 
     */}
import { useEffect } from "react"
import { Navbar, Hero, Info, Product, Sellers, Footer } from "./components"
import { Element } from "react-scroll"
import gsap from "gsap"
function App() {

  useEffect(() => {
    const mainDiv = document.getElementsByClassName('main-div')[0]
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
    const WELCOME = splitText('WELCOME')


    gsap.fromTo(WELCOME.children, {
      opacity: 0,
      y: 100,
      stagger: 0.1,
      ease: 'power4.out',
      repeat: 1,
    }, {
      opacity: 1,
      y: 100,
      stagger: .5,
      duration: 2,
      ease: 'power4.out',
    })
    gsap.to(WELCOME.children, {
      opacity: 0,
      delay: 4.5,
      y: 100,
      stagger: 0.1,
      ease: 'power4.out',
      repeat: 0
    })
    gsap.to(WELCOME.children, {
      delay: 5,
      display: 'none'
    })
    gsap.fromTo(mainDiv.children, {
      opacity: 0,
      stagger: .001,
      ease: 'power1.out',
      display: 'none'
    }, {
      delay: 5,
      opacity: 1,
      stagger: .001,
      ease: 'power1.out',
      display: 'flex'
    })

    gsap.to("#mainFooter", {
      display: 'block',
      delay: 5.0001,
    })
    gsap.to("#welcomeDiv", {
      display: 'none',
      delay: 4.5
    })

  }, [])



  return (
    <div className="overflow-hidden flex-col relative flex justify-center items-center ">
      <div id='welcomeDiv' className="w-[100vw] h-[90vh] overflow-hidden flex justify-center items-center ">
        <div id="WELCOME" className="sm:text-[8em] overflow-hidden text-[3em] text-black  ">WELCOME</div>
      </div>
      <div className="main-div overflow-y-hidden">
        <header>
          <Element name="/" >
            <Navbar />
          </Element>
        </header>
        <main className="mt-[3rem]">
          <Element name="/hero" >
            <Hero />
          </Element>
          <Element name="/info">
            <Info />
          </Element>
          <Element name="/products">
            <Product />
          </Element>
          <Element name="/sellers">
            <Sellers />
          </Element>
        </main>
        <footer id="mainFooter">
          <Element name="/contact">
            <Footer />
          </Element>
        </footer>
      </div>
    </div>

  )
}

export default App