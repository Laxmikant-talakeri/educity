import React from 'react'
import'./Hero.css'
import  "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container' >
      <div className="hero-text">
        <h1>We Ensure better education a better world</h1>
        <p>
        EduCity is an innovative and dynamic educational hub that seamlessly integrates cutting-edge learning environments with a vibrant community atmosphere. This educational ecosystem is designed to foster collaboration, creativity, and academic excellence, offering a diverse range of programs and resources to meet the evolving needs of learners.
        </p>
        <button className='btn'>Explore more   <img src="dark-arrow.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
