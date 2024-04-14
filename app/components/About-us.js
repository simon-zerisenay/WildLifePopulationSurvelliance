import React from "react";
import { Button } from "./Button";
import "./About-us.css";
function Aboutus() {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-box">
        <h1 className="about-us-text"> About us </h1>
        <p className="about-us-intro">
        The Wild Life Counting Project innovates wildlife population surveys using advanced computer vision and drone technology. Our mission is to streamline and enhance wildlife tracking and counting through state-of-the-art models integrated into drones and a user-friendly mobile app. With a clear 12-month plan from research to deployment, led by a dedicated Resident Engineer, we're redefining wildlife monitoring with efficiency, accuracy, and conservation at the forefront.
        </p>
        <p className="about-us-contination">
        Our vision is to revolutionize wildlife population surveys through the seamless integration of cutting-edge computer vision and drone technology, advancing conservation efforts with efficiency, accuracy, and accessibility.






        </p>
        

        <Button
          href='/about'
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
          
        >
          Who we are
        </Button>
        
      </div>
    </div>
  );
}

export default Aboutus;
