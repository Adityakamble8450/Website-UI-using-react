"use client"
import React from 'react'
import './Featurs.css'




const Featurns = ({ title, text }) => {
  return (
   
      <div className="gpt4__features-container__feature">
        <div className="gpt4__features-container__feature-title">
          <div />
          <h1>{title}</h1>
        </div>
        <div className="gpt4__features-container_feature-text">
          <p>{text}</p>
        </div>
      </div>
    );
    

  
}

export default Featurns
