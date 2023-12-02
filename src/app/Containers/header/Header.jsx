import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='gpt4__header section_padding ' id='home'>
      <div className='gpt4__header-containt'>
        <h1 className='gradient__text '>Let’s Build Something
amazing with GPT-4 
OpenAI</h1>
  <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
  <div className='gpt4__header-input'>
    <input type="email" placeholder='your Email Address' />
    <button>Get Started</button>
  </div>
  <div className='gpt4__header-containt-peopal'>
    <img src="/assets/people.png" alt="peopal" />
    <p>1,600 people requested access a visit in last 24 hours</p>
  </div>
    </div>
  <div className='gpt4__header-containt-ai'>
    <img src="/assets/ai.png" alt="ai" />
  </div>

      
    </div>
  )
}

export default Header
