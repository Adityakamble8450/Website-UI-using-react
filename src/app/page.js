"use client"
"use client"
import React from 'react'
import { Artical,CTA,Brand,Featuares,Navbar } from './componants'
import { Blog,Feature,Footer,Header,Posibility,WhatGPT4 } from './Containers'
const page = () => {
  return (
    <div className='page'>
    <div className='--gradiant_bg'>
       <Navbar/>
       <Header/>
       </div>
      <Brand/>
      <WhatGPT4/>
      <Feature/>
      <Posibility/>
      <CTA/>
      <Blog/>
      <Footer/>   
    </div>
  )
}

export default page
