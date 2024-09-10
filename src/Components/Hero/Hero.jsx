import React from 'react'
import './Hero.css'

//need to add profile image here
const Hero = () => {
  return (
    <div className="hero">
      <img src="" alt="" />
      <h1><span>I'm Tejas Sadade,</span> Frontend Developer based in India.</h1>
      <p>
        I am a frontend developer from Maharashtra, India with 1 year of
        experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero