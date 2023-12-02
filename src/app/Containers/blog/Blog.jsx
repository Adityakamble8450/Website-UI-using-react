import React from 'react'
import './Blog.css'
import { Artical } from '@/app/componants'

const Blog = () => {
  return (
    <div className='gpt4_blog section_padding'>
      <div className='gpt4_blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className="gpt4_blog-goupB">
      <div className='gpt4_blog-container-first'>
        <Artical imgurl='/assets/blog01.png' date='Sep 26, 2021' headings='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      </div>
      <div className='gpt4_blog-containers'>
      <Artical imgurl='/assets/blog02.png' date='Sep 26, 2021' headings='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      <Artical imgurl='/assets/blog03.png' date='Sep 26, 2021' headings='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      <Artical imgurl='/assets/blog04.png' date='Sep 26, 2021' headings='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      <Artical imgurl='/assets/blog05.png' date='Sep 26, 2021' headings='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
      </div>
      </div>
    </div>
  )
}

export default Blog
