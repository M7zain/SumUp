import React from 'react'
import { mainLogo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items center w-full mb-10 pt-3'>
          <img src={mainLogo}
           alt="barmejAR" 
           className='w-10 object-contain'/>
          
           <button
           type='button'
           onClick={() => window.open("https://github.com/M7zain")}
           className='black_btn'
           >
            Github
           </button>
      </nav>

      <h1 
      className='head_text'> 
      Summarize Articles with <br className='max-md:hidden' />
      <span className='blue_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 
      className='desc'>
        Simplify your reading with Sum-UP, an open-source article 
        summarizer that transforms lengthy article into clear and
        concise summaries
      </h2>
    </header>
  )
}

export default Hero