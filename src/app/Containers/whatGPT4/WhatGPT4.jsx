import React from 'react'
import './WhatGPT4.css'
import { Featuares } from '@/app/componants'

const WhatGPT4 = () => {
  return (
    <div className='gpt4__whatgpt4 section_margin section_padding'
    id='whatgpt4'>
      <div className='whatgpt4__feature'>
        <Featuares title='What is GPT-4' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
       
      </div>
      <div className='whatgpt4__featurs-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='whaygpt4_features-container'>
      <Featuares title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
      <Featuares title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
      <Featuares title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
      </div>
      
      
    </div>
  )
}

export default WhatGPT4
