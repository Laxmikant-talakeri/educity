import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
    <img src={about_img} className='about-img'  alt="" />
    <img src={play_icon} className='play-icon' alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit debitis cumque omnis excepturi rerum fugiat eaque nemo explicabo facere esse, dolore vitae tempore tenetur adipisci distinctio veniam. Molestias, iusto!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magnam. Nisi, vitae itaque! Blanditiis sequi neque velit ipsam fugit impedit a vero, consectetur eveniet illo. Recusandae natus ipsum voluptates qui.</p>
        </div>
      
    </div>
  )
}

export default About
