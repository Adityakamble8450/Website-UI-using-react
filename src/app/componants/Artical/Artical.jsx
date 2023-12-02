"use client"
import React from 'react'
import './Artical.css'


const Artical = ({imgurl,date,headings}) => {
  return (
    <div className='gpt4_blog-container-artical'>
      <div className='gpt4_blog-container-artical_image'>
        <img src= {imgurl} alt="blog"/>
      </div>
      <div className='gpt4_blog-container_text'>
        <div>
        <p>{date}</p>
        <h3>{headings}</h3>
        </div>
        <p>Read full artical</p>

      </div>
        
    </div>
  )
}

export default Artical
