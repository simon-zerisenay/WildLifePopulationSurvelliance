'use client'
import React from "react";
/* import "../App.css"; */
import { Button } from "./Button";
import "./hero.css"; 
import Link from "next/link";
function Hero() {
  return (
    <div className="hero-container">
      <video
        // src="C:\Users\H00422000\saizer-web-2\public\videos\video-2.mp4"
        src="./images/buf-vid.mp4"
        autoPlay
        loop
        muted
      />
      <h1>wildlife Counting</h1>
      <p>                       Transforming Wildlife Conservation: Innovating Population Surveys with Advanced Computer Vision and Drone Technology</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Us
        </Button>
        
        
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Explore
        </Button>
      
        
      </div>
    </div>
  );
}

export default Hero;
