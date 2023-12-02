import React from 'react'
import './Brand.css'

const Brand = () => {
  return (
    <div className='brand section_padding'>
      <div className='brand__image'>
        <img src="/assets/google.png" alt="google" />     
      </div>
      <div className='brand__image'>
        <img src="/assets/shopify.png" alt="shopify"/>     
      </div>
      <div className='brand__image'>
        <img src="/assets/dropbox.png" alt="google"/>     
      </div>
      <div className='brand__image'>
        <img src="/assets/slack.png" alt="google"/>     
      </div>
      <div className='brand__image'>
        <img src="/assets/atlassian.png" alt="google"/>     
      </div>
      
    </div>
  )
}

export default Brand
