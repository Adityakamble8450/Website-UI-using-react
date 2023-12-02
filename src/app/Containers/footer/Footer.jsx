import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='gpt4_footer  section_padding'>
      <div className="gpt4_footer-heading">
       <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt4_footer-button">
       <p>Request Early Access</p>
      </div>
      <div className="gpt4_footer-links">
        <div className="gpt4_footer-links_logo">
          <img src="/assets/logo.svg" alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links">
          <h3>Get in touch</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
      <p> © 2021 GPT-3. All rights reserved.</p>
      </div>
        
    </div>
  )
}

export default Footer
